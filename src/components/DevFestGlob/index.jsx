import React, { useRef, useState, useCallback, useEffect } from 'react'
import * as THREE from 'three'
import Globe from 'react-globe.gl'
import countries from '../../data/globe-data-min.json'
import locations from '../../data/globe-locations.json'
import Arcs from '../../data/globe-arcs.json'

const DevFestGlobe = () => {
    const globeMaterial = new THREE.MeshPhongMaterial()
    globeMaterial.bumpScale = 10
    globeMaterial.color = new THREE.Color(0x0a66d5)
    globeMaterial.emissive = new THREE.Color(0x220038)
    globeMaterial.emissiveIntensity = 0.1
    globeMaterial.shininess = 0.7
    const globeRef = useRef(null)
    useEffect(() => {
        globeRef.current.pointOfView({
            lat: 28.0289837,
            lng: 1.6666663,
            altitude: 2,
        })
        const camera = globeRef.current.camera()
        camera.zoom += 0.17
        camera.updateProjectionMatrix()
        const controls = globeRef.current.controls()
        controls.enableZoom = false
        controls.enableDamping = true
        controls.dynamicDampingFactor = 0.01
        controls.enablePan = false
        controls.minDistance = 200
        controls.maxDistance = 500
        controls.rotateSpeed = 0.8
        controls.zoomSpeed = 1
        controls.autoRotate = true

        controls.minPolarAngle = Math.PI / 3.5
        controls.maxPolarAngle = Math.PI - Math.PI / 3
    }, [])
    const [height, setHeight] = useState(null)
    const [width, setWidth] = useState(null)
    const div = useCallback((node) => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height)
            setWidth(node.getBoundingClientRect().width)
        }
    }, [])

    return (
        <div
            className="w-full h-full overflow-y-hidden scroll overflow-x-hidden"
            ref={div}
        >
            <Globe
                backgroundColor="#0675EF"
                animateIn
                ref={globeRef}
                width={width}
                height={700}
                globeMaterial={globeMaterial}
                showAtmosphere
                hexPolygonColor={(e) => {
                    if (['DZA'].includes(e.properties.ISO_A3)) {
                        return '#abd8f5'
                    }
                    return '#189BED'
                }}
                hexPolygonsData={countries.features}
                hexPolygonResolution={3}
                hexPolygonMargin={0.5}
                pointsData={locations.devfests}
                pointColor="#ffffff"
                pointsMerge
                pointAltitude={0}
                pointRadius={0.05}
                arcsData={Arcs.flights}
                arcColor={() => '#ffffff'}
                arcAltitude={0.1}
                arcStroke={0.2}
                arcDashLength={() => Math.random()}
                arcDashGap={() => Math.random()}
                arcDashAnimateTime={() => Math.random() * 4000 + 2000}
                arcsTransitionDuration={100}
                arcDashInitialGap={1}
                waitForGlobeReady
            />
        </div>
    )
}
export default DevFestGlobe
