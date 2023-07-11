import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'

{/* Hero Section  */}
export default function Hero() {
  return (
    <section className="relative mt-20 mb-10 ">
      
      {/* Illustration behind hero content */}
     

      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-10 ">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 mt-4" data-aos="zoom-y-out"><span className=" text-white ">Helping founders to grow their </span><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">business at scale</span></h1>
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