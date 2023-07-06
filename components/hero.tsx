import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'

export default function Hero() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="blue-500" offset="0%" />
              <stop stopColor="teal" offset="77.402%" />
              <stop stopColor="blue-500" offset="100%" />
            </linearGradient> */}
            <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%"id="illustration-01">
          <stop stopColor="#4FD1C5" offset="0%" />
            <stop stopColor="#81E6D9" offset="25.871%" />
            <stop stopColor="#338CF5" offset="100%" />
              </radialGradient>
            
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 " data-aos="zoom-y-out"><span className=" text-white ">Helping founders to grow their </span><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">business at scale</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-10" data-aos="zoom-y-out" data-aos-delay="150">Outlfy Group provides its customers with various data processing and analysing solutions that are useful for examining all types of data to make reasonable decisions on various aspects of the business. </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Book a call with us</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image with the Video, Uncomment it out to make it visible */}  
          {/* Hero image */}
          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} /> */}

        </div>

      </div>
    </section>
  )
}