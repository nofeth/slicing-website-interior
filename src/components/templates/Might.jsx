import image6 from '../../assets/img/6.jpg'
import image7 from '../../assets/img/7.jpg'
import image8 from '../../assets/img/8.jpg'
import image9 from '../../assets/img/9.jpg'
import image10 from '../../assets/img/10.jpg'
import { Link } from 'react-router-dom'
export default function Might() {
    return (
        <section className='container my-40'>
            <h2 className="font-semibold ml-2 lg:ml-0 text-4xl lg:text-5xl mb-14 lg:mb-20">You Might Also Be Interested In..</h2>
            <article className="flex flex-wrap lg:flex-nowrap gap-5">
                <article className='flex w-full mx-2 lg:mx-0 lg:w-1/2 gap-x-5'>
                    <div className='w-full'>
                    <div className='overflow-hidden w-full h-[400px] mb-5'>
                            <img className='hover:scale-110 duration-500 transition w-full h-[400px] mb-5 object-cover' src={image6} alt="" />
                        </div>
                        <div className='overflow-hidden w-full h-[400px] mb-5'>
                            <img className='hover:scale-110 duration-500 transition w-full h-[400px] mb-5 object-cover' src={image9} alt="" />
                        </div>
                    </div>
                    <div className='w-full h-full mt-28'>
                        <div className='overflow-hidden w-full h-[400px] mb-5'>
                            <img className='hover:scale-110 duration-500 transition w-full h-[400px] mb-5 object-cover' src={image8} alt="" />
                        </div>
                        <div className='overflow-hidden w-full h-[400px] mb-5'>
                            <img className='hover:scale-110 duration-500 transition w-full h-[400px] mb-5 object-cover' src={image7} alt="" />
                        </div> 
                    </div>
                </article>
                <article className='w-full lg:w-1/2 mx-2 lg:mx-0 relative'>
                    <div className='w-full group cursor-pointer relative max-h-[600px] xl:h-[600px] overflow-hidden'>
                        <Link className='absolute transition duration-500 text-white font-normal opacity-50 group-hover:opacity-100 z-10 bottom-0 top-0 left-0 right-0 flex justify-center items-center' to="/">View More</Link>
                        <img className='w-full max-h-[600px] transition duration-500 group-hover:brightness-75 group-hover:scale-110   object-cover bg-no-repeat' src={image10} alt="" />
                    </div>
                    <div className='mx-5 lg:mx-10 h-56 lg:h-full mt-14'>
                        <h3 className='text-3xl lg:text-5xl'>LATEST STORIES</h3>
                        <p className='text-[#9FA1AD] mt-3 text-2xl max-w-md'>Premium Quality and Outstanding Service</p>
                        <Link to="/" className='inline-block rounded-sm absolute  bottom-0 text-center font-semibold text-white  bg-[#F9A309] py-5 px-10 '>Read Now</Link>
                    </div>
                </article>
            </article>
        </section>
    )
}