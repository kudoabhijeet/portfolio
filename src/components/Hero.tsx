'use client'
import Lottie from 'lottie-react'
import animationsData from '../../public/hero.json'
import data from '../data/hero_content.json'

const Hero = () => {
    return (
        <div className="flex flex-col justify-center gap-10 items-center lg:flex-row">
            <div className="pb-9 sm:pb-40 sm:pt-24 lg:pb-48">
                <div className="relative mx-auto max-w-7xl px-4 sm:static ">
                    <div className="sm:max-w-lg">
                        <h1 className="text-5xl font-bold tracking-tight text-grey sm:text-5xl"><span className="text-blue">backend</span> heavy</h1>
                        <h1 className="text-5xl font-bold tracking-tight text-grey sm:text-5xl"><span className="text-blue">full stack</span> engineer</h1>
                        <p className="mt-4 text-xl tracking-tight text-grey md:text-md">{data.hero_desc}</p>

                        <div className="mt-4">
                            <a href="https://calendly.com/kudoabhijeet/1hr">
                                <button
                                    type="submit"
                                    className="rounded-md bg-blue px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    Work with me!
                                </button>
                            </a>
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