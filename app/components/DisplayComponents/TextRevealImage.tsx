import Image from 'next/image'

const TextRevealImage = () => {
  return (
    <div className='flex flex-col group relative'>
        <div className="flex flex-col -space-y-12 justify-center items-center">
            <div className="flex z-9 -space-x-24">
                <div className="rounded-xl z-3 border -rotate-12 group-hover:-rotate-4 group-hover:-translate-x-20 group-hover:-translate-y-16 transition-all duration-300 w-56 h-32 p-1 overflow-hidden bg-white">
                    <Image src='/herosectionimages/Herosection01.png' alt='' width={1000} height={1000} className='w-full h-full object-contain rounded-lg ' />
                </div>
                <div className="rounded-xl border rotate-12 group-hover:rotate-4 group-hover:translate-x-20 group-hover:-translate-y-16 transition-all duration-300  w-56 h-32 p-1 overflow-hidden bg-white">
                    <Image src='/herosectionimages/Herosection02.png' alt='' width={1000} height={1000} className='w-full h-full object-contain rounded-lg ' />
                </div>
            </div>
            <div className="flex z-9 -space-x-24">
                <div className="rounded-xl z-3 border rotate-12 group-hover:rotate-4 group-hover:-translate-x-20 group-hover:translate-y-16 transition-all duration-300  w-56 h-32 p-1 overflow-hidden bg-white">
                    <Image src='/herosectionimages/Herosection03.png' alt='' width={1000} height={1000} className='w-full h-full object-contain rounded-lg ' />
                </div>
                <div className="rounded-xl border -rotate-12 group-hover:-rotate-4 group-hover:translate-x-20 group-hover:translate-y-16 transition-all duration-300  w-56 h-32 p-1 overflow-hidden bg-white">
                    <Image src='/herosectionimages/Herosection07.png' alt='' width={1000} height={1000} className='w-full h-full object-contain rounded-lg ' />
                </div>
            </div>
        </div>
        <div className=" tracking-tight absolute top-1/2 left-1/2 text-center leading-none font-black opacity-60 max-w-56 w-56 text-4xl uppercase -translate-x-1/2 -translate-y-1/2 blur-lg group-hover:blur-none transition-all duration-300">I am Hiding behind this</div>
    </div>
  )
}

export default TextRevealImage