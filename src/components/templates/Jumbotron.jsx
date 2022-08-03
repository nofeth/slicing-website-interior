import image1 from '../../assets/img/1.jpg'
import image2 from '../../assets/img/2.jpg'
import image3 from '../../assets/img/3.jpg'

export default function Jumbotron(){
    return (
        <section className='container'>
            <div className='flex gap-5 md:flex-nowrap relative flex-wrap h-[700px] mt-20 mx-5 md:mx-auto'>
            <article className="flex flex-col md:order-1 order-2 max-w-xl grow justify-center  ">
                <h1 className="text-4xl font-medium sm:text-5xl lg:text-7xl">We Help to Make Modern Interior</h1>
                <p className="w-3/4 font-normal text-lg mt-4 text-[#9FA1AD]">We combine interior and Exterior design services and often provide them as a single solution.It helps us...</p>
            <div className="absolute top-full md:bottom-0 md:top-auto w-full md:w-7/12 flex   shadow-[#FDDA9D] shadow-2xl overflow-hidden rounded-tl-xl rounded-bl-xl rounded-tr-xl rounded-br-xl">
                <input type="text" className='w-full py-7 pl-5' placeholder='Search Engine for food'/>
                <button className="px-10 bg-[#F9A309]  text-white" ><i className="text-4xl uil uil-search"></i></button>
            </div>
            </article>
            <article className="flex gap-3 md:order-2 order-1 w-full border-4 lg:w-full mx-5 md:mx-auto">
                <img className=" object-cover" src={image1} alt="" />
                <img className=" object-cover" src={image2} alt="" />
                <img className=" h-4/5 lg:w-1/3" src={image3} alt="" />
            </article>
            </div>
        </section>
    )
}