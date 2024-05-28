'use client'
import Lottie from 'lottie-react'
import animationsData from '../../../public/hero.json'
const Hero = () => {
    return (
        <div className="grid grid-cols-2 justify-self-center">
            <div className="pb-9 sm:pb-40 px-20 sm:pt-24 lg:pb-48">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg pt-40">
                        <h1 className="text-5xl font-bold tracking-tight text-grey sm:text-3xl"><span className="text-blue">backend</span> heavy</h1>
                        <h1 className="text-5xl font-bold tracking-tight text-grey sm:text-3xl"><span className="text-blue">full stack</span> engineer</h1>
                        <p className="mt-4 text-xl tracking-tight text-grey">This year, our new summer collection will shelter you from the harsh elements of a world that care if you live or die.</p>
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
                            className="h-auto w-auto sm:h-50 w-50"
                            animationData={animationsData}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero