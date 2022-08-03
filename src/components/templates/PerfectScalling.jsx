import image5 from '../../assets/img/5.jpg'
import { Link } from 'react-router-dom'
export default function PerfectScalling(){
    return (
        <section className="bg-white">
            <div className='container flex flex-col relative  h-[800px] gap-5 pt-20 overflow-hidden'>
            <article className='h-1/2 ml-2 flex lg:justify-center lg:ml-40  items-center w-full'>
                <div className='max-w-sm md:max-w-md'>
                    <h2 className='font-semibold text-5xl'><span className='inline-block w-full mb-3'>Hot</span> Deals for you</h2>
                    <p className='text-[#9FA1AD] mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti 
                        voluptatibus quas corporis aut? Cumque delectus voluptatem veniam mollitia
                        pariatur obcaecati quibusdam rem placeat tenetur provident 
                        possimus ducimus odio voluptatibus numquam vel.
                    </p>
                </div>
            </article>
            
            <article className='h-1/2 bg-[#EAD3CB] gap-5 w-full flex flex-nowrap md:flex-nowrap   relative p-5'>
                <article className='w-full sm:w-2/4 self-center xl:ml-36 lg:w-1/2 xl:w-[38%] '>
                    <div className='p-5 lg:w-1/2 text-center lg:text-left xl:w-[250px] lg:p-6 bg-white rounded-xl relative z-10 lg:float-right  '>
                        <h3 className='font-semibold text-sm md:text-base'>Perfect Scalling</h3>
                        <p className='my-3 opacity-50 font-medium  text-sm'>Desing is a part of the every ..</p>
                        <Link to="/" className='inline-block rounded-sm text-sm lg:text-base text-center font-semibold text-white  bg-[#F9A309] py-3 px-5 '>Read Now</Link>
                    </div>
                </article>
                <div className='lg:mt-12 w-full lg:w-1/2 xl:w-full md:max-w-xs xl:max-w-xl text-lg mt-20 font-normal '>
                    <p className='opacity-60 text-base lg:text-xl'>From fashion weeks without shows to brands abandoning the traditional schedules. Covid 19 has thrown the industry into a state of flux</p>
                    <div className='flex items-center'>
                        <span className='w-5 h-5 flex mr-2 justify-center items-center rounded-full bg-white'>
                        <i className="uil uil-arrow-right animate-bounce"></i>
                        </span>
                        <p className='text-xs sm:text-sm font-medium font-sans'> BY ADE OKTAVIANO</p>
                    </div>
                </div>
            </article>
            <img className='absolute w-56 hidden lg:block md:w-full md:max-w-sm h-full  object-cover pb-20 xl:left-36 2xl:left-56 lg:left-4' src={image5} alt="" />
            </div>
        </section>
    )
}