import React, { useState } from 'react'
import Typewriter from 'typewriter-effect'
import NavBar from '../../components/NavBar'
import BitsImage from '../../images/bits.png'
import DevfestLogo from '../../images/logo.svg'
import DevfestGlobe from '../../components/DevFestGlob'
import SubscribeButton from '../../components/common/SubscribeButton'
import Countdown from '../../components/Countdown'
import Alert from '../../components/common/Alert/Alert'

const HeroSection = () => {
    const [alertActive, setAlert] = useState(false)
    const closeAlert = () => {
        setAlert(false)
        clearTimeout()
    }
    const showAlert = () => {
        setAlert(true)
        setTimeout(() => {
            setAlert(false)

        }, 5000);
    }

return(
    <section id="#home">
        <div
          
            className=" max-w-full  relative flex flex-col"
            style={{
                background:
                    'linear-gradient(107.56deg, #0053BA 0%, #0574EF 34.95%, #1C7EF0 89.12%)',
            }}
        >
            <NavBar navBarClass="z-10"  showAlert={showAlert}  />
           
            <div className=" absolute -top-24 left-0 z-0 w-48 md:w-64">
                <img src={BitsImage} alt="Bits" />
            </div>


                <div className="relative flex flex-row w-full z-10 overflow-x-hidden overflow-y-hidden">
                    <div className=" absolute -right-96 pt-16 text-xs w-2/6 z-20 text-darkBlue overflow-y-hidden">
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
                                    .typeString(
                                        '<pre>  gdgAlgiers.launch{</pre>'
                                    )
                                    .typeString('<br/>')
                                    .typeString(
                                        "<pre>    // Let's make it;</pre>"
                                    )
                                    .typeString(
                                        "<pre>    Event devfest21 = Devfest(edition=2021,host='GDGAlgiers')</pre>"
                                    )
                                    .typeString('<br/>')
                                    .typeString(
                                        '<pre>    // Learn Together</pre>'
                                    )
                                    .typeString(
                                        '<pre>    devfest21.setLearnTogether(true)</pre>'
                                    )
                                    .typeString('<br/>')
                                    .typeString(
                                        '<pre>    // Celebrate It </pre>'
                                    )
                                    .typeString(
                                        '<pre>    devfest21.setHaveFun(true)</pre>'
                                    )
                                    .typeString('<br/>')
                                    .typeString(
                                        '<pre>    // Hack Together </pre>'
                                    )
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
                    <div className="flex flex-col mr-2 md:mr-0 w-full lg:w-2/5 pt-28 md:pt-48 overflow-y-hidden">
                        <div className="pl-24 ">
                            <img src={DevfestLogo} alt="DevFest" />
                        </div>
                        <div className=" bg-white-lighter overflow-y-hidden text-center text-black-darker w-3/4 py-4  text-xl sm:text-6xl">
                            <Typewriter
                                className="w-full overflow-y-hidden overflow-x-hidden"
                                options={{
                                    loop: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString('Conferences')
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString('Workshops')
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString('Hackathon')
                                        .pauseFor(1000)
                                        .start()
                                }}
                            />
                        </div>
                        <div className=" pt-0 lg:pt-14 flex justify-start lg:justify-center">
                            <SubscribeButton classes=" py-2 md:py-5 text-lg md:text-3xl lg:text-4xl px-8 md:px-14 lg:px-28 " />
                        </div>
                    </div>
                    <div className="w-3/5 hidden lg:block ">
                        <DevfestGlobe />
                    </div>
                </div>
                <div className="flex items-center flex-col lg:flex-row w-full justify-between py-12 sm:py-6 px-8">
                    <Countdown className=" w-full md:w-auto" />
                    <div className="flex flex-col text-white-lighter mt-20 sm:mt-12 md:mt-0">
                        <h1 className=" text-2xl sm:text-4xl  md:text-6xl font-extrabold">
                            Any minute now
                        </h1>
                        <p className="font-light mt-2">
                            Be the first to know about the event, subscribe now.
                        </p>
                    </div>
                </div>
            </div>
            <Alert
                Message="registrations will open soon"
                alertActive={alertActive}
                closeAlert={closeAlert}
            />
        </section>
    )
}
export default HeroSection
