'use client'
import Lottie from 'lottie-react'
import animationsData from '../../public/hero.json'
import data from '../data/hero_content.json'

const Hero = () => {
    return (
        <div className="flex flex-col justify-center gap-10 items-center md:flex-row">
            <div className="pb-9 sm:pb-40 sm:pt-24 lg:pb-48">
                <div className="relative mx-auto max-w-7xl px-4 sm:static ">
                    <div className="sm:max-w-lg">
                        <h1 className="text-5xl font-bold tracking-tight text-grey sm:text-5xl"><span className="text-blue">backend</span> heavy</h1>
                        <h1 className="text-5xl font-bold tracking-tight text-grey sm:text-5xl"><span className="text-blue">full stack</span> engineer</h1>
                        {/* <p className="mt-4 text-xl tracking-tight text-grey md:text-md">I am a dynamic 24-year-old software engineer from India, with a journey in the tech world. My adventure began with Visual Basic and C# in high school, sparking a deep-rooted passion for crafting and elevating technology products and services.</p> */}
                        <p className="mt-4 text-xl tracking-tight text-grey md:text-md">{data.hero_desc}</p>

                        <div className="mt-4">
                            <button
                                type="submit"
                                className="rounded-md bg-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="justify-center sm:pb-40 sm:pt-24">
                <div className="mx-auto max-w-7xl sm:static sm:px-6">
                    <div className="sm:max-w-lg">
                        <Lottie
                            className="h-auto w-auto sm:h-50"
                            animationData={animationsData}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero