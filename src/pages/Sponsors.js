import React from 'react';
import SponsorsCard from './Sponsors/SponsorsCard';

export const Sponsors = () => {
    return (
        <section className="h-screen w-full relative pt-4">
            <div className="font-robotoMono">
                <h2 className="text-2xl lg:text-6xl font-bol ml-2 lg:ml-14 " style={{color: "#046CE1"}}>Sponsor</h2>
                <h3 className="text-sm lg:text-3xl ml-2 lg:ml-14 mt-3">Thank you for sponsoring us!</h3>
            </div>
            <div className="z-0">
                <div style={{backgroundColor: "#3D8DF5", width: "20%"}} className="h-full absolute right-0 top-0 border-black border-2 lg:border-4 ">
                    <div className="relative">
                        <div className="rounded-full bg-white border-black border-2 lg:border-4 h-12 w-12 lg:h-28 lg:w-28 flex justify-center items-center absolute -left-6 lg:-left-14 top-2 lg:top-20">
                            <img src="/earth-icon.png" alt="" style={{height: "60%", width: "60%"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex z-10 absolute flex-col lg:flex-row ml-12 sm:ml-20">
                    <SponsorsCard margin="lg:mt-28 mt-8" imageSrc="/github.png" imageAlt="Github logo"/>
                    <SponsorsCard margin="lg:mt-16 mt-8" imageSrc="/samsung.png" imageAlt="Samsung logo"/>
                    <SponsorsCard margin="lg:mt-28 mt-8" imageSrc="/google.png" imageAlt="Google logo"/>
                </div>
            <img src="/code.png" alt="" className="absolute -left-12 -bottom-1/2"/>
            
        </section>
    )
}