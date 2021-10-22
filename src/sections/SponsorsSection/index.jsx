import React from 'react';
import Typewriter from 'typewriter-effect';
import SponsorsCard from '../../components/SponsorsCard';
import GithubImage from '../../images/github.png'
import GoogleImage from '../../images/google.png'
import SamsungImage from '../../images/samsung.png'
import EarthIcon from '../../images/earth-icon.png'


const SponsorsSection = () => {
    return (
        <section className="h-screen w-full relative pl-4 pt-6">
            <div className="font-robotoMono">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bol ml-2 lg:ml-14 " style={{color: "#046CE1"}}>Sponsor</h2>
                <h3 className="text-md sm:text-xl md:text-2xl lg:text-3xl ml-2 lg:ml-14 mt-3">Thank you for sponsoring us!</h3>
            </div>
            <div className="z-0 hidden lg:block md:block">
                <div style={{backgroundColor: "#3D8DF5", width: "20%"}} className="h-full absolute right-0 top-0 border-black border-4 ">
                    <div className="relative">
                        <div className="rounded-full border-black border-4 h-28 w-28 flex justify-center items-center absolute -left-14 top-20 bg-white-default">
                            <img src={EarthIcon} alt="" style={{height: "60%", width: "60%"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex z-10 absolute flex-col lg:flex-row md:ml-12 p-4">
                    <SponsorsCard margin="lg:mt-28 mt-8" imageSrc={GithubImage} imageAlt="Github logo"/>
                    <SponsorsCard margin="lg:mt-16 mt-8" imageSrc={SamsungImage} imageAlt="Samsung logo"/>
                    <SponsorsCard margin="lg:mt-28 mt-8" imageSrc={GoogleImage} imageAlt="Google logo"/>
            </div>
                <div className=" absolute top-1/2 left-12 pt-16 text-xs w-2/6 z-20 text-darkBlue overflow-y-hidden">
                    <Typewriter
                        className="w-full "
                        options={{
                            delay: 20,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('fun main() {')
                                .typeString('<br/>')
                                .typeString(
                                    '<pre>  print("Wait for Us COOL THINGS ARE COMING ....")</pre>'
                                )
                                .typeString('<br/>')
                                .typeString(
                                    '<pre>  // GDG Algiers Present<pre>'
                                )
                                .typeString(
                                    '<pre>  CoroutineScope gdgAlgiers;</pre>'
                                )
                                .typeString('<br/>')
                                .typeString('<pre>  gdgAlgiers.launch{</pre>')
                                .typeString('<br/>')
                                .typeString("<pre>    // Let's make it;</pre>")
                                .typeString(
                                    "<pre>    Event devfest21 = Devfest(edition=2021,host='GDGAlgiers')</pre>"
                                )
                                .typeString('<br/>')
                                .typeString('<pre>    // Learn Together</pre>')
                                .typeString(
                                    '<pre>    devfest21.setLearnTogether(true)</pre>'
                                )
                                .typeString('<br/>')
                                .typeString('<pre>    // Celebrate It </pre>')
                                .typeString(
                                    '<pre>    devfest21.setHaveFun(true)</pre>'
                                )
                                .typeString('<br/>')
                                .typeString('<pre>    // Hack Together </pre>')
                                .typeString(
                                    '<pre>    devfest21.setHackerMode(true)</pre>'
                                )
                                .typeString('<br/>')
                                .typeString(
                                    "<pre>    Result.Success('And Enjoy Another Edition of DevFest')</pre>"
                                )
                                .typeString('<pre>  }.onStart({</pre>')
                                .typeString(
                                    '<pre>    print("LET\'S DO COOL THINGS THAT MATTER");</pre>'
                                )
                                .typeString('<pre>  }) </pre>')
                                .typeString('}')
                                .start()
                        }}
                    />
                </div>

        </section>
    )
} 

export default SponsorsSection