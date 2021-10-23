import React from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Navigations from '../../data/navbar'
import RegisterButton from '../common/RegisterButton'
import DevfestLogo from '../../images/logo.svg'

const NavBar = ({ navBarClass , alert }) => (
    <Disclosure as="nav" className={`${navBarClass ?? ''}`}>
        {({ open }) => (
            <>
                <div className="flex-1 max-w-full px-4 sm:px-8 lg:px-8">
                    <div className="relative  flex flex-row justify-center sm:justify-between h-14  sm:h-20 sm:pt-4">
                        <div className="w-48 lg:block hidden">
                            <img src={DevfestLogo} alt="Devfest" />
                        </div>
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button */}
                            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XIcon
                                        className="block h-6 w-6 text-white-lighter"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <MenuIcon
                                        className="block h-6 w-6 text-white-lighter"
                                        aria-hidden="true"
                                    />
                                )}
                            </Disclosure.Button>
                        </div>
                        <div className="sm:hidden block">
                            <h1 className=" text-black-darker pt-3 text-xl">
                                DevFest 2021
                            </h1>
                        </div>
                        <div className="hidden sm:flex flex-row space-x-5 md:space-x-8 pt-2 mx-2">
                            {Navigations.map((item, index) => (
                                <a
                                    id={`${index}`}
                                    href={item.href}
                                    className="text-white-lighter text-base md:text-lg lg:text-xl hover:text-black-default"
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>
                        <div onClick={()=>alert()}>
                            <RegisterButton classes="py-2 text-base md:text-lg px-3 md:px-5 lg:px-10 hidden sm:block "/>
                        </div>
                    </div>
                </div>
                <Disclosure.Panel className="sm:hidden">
                    <div className=" flex flex-col items-center  px-2 pb-3 space-y-1">
                        {Navigations.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className={` block hover:text-black-default px-3 pb-2 rounded-md text-base font-medium text-center text-white-lighter `}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.title}
                            </a>
                        ))}
                        <RegisterButton classes="py-1 px-8" />
                    </div>
                </Disclosure.Panel>
            </>
        )}
    </Disclosure>
)
export default NavBar
