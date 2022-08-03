import { Link } from 'react-router-dom'
import image4 from '../../assets/img/4.jpg'

export default function TopFashion(){
    return (
        <section className="container flex flex-wrap lg:flex-nowrap my-20">
            <article className='p-5 2xl:ml-52 lg:ml-16 flex flex-col justify-center mx-auto w-full mt-7 lg:mt-0 md:max-w-xl lg:order-1 order-2'>
                <h2 className="font-semibold">Top Fashion Brands In The World</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum modi expedita fugiat voluptate veniam necessitatibus, quo neque impedit alias assumenda, aut quaerat soluta aliquam rerum natus asperiores, quos officia? Illum?</p>
            </article>
            <article className="xl:self-center relative w-full order-1 lg:order-2 ">
                <article className='p-5 xl:p-10 bg-white rounded-xl absolute z-10 left-9 lg:left-16 xl:left-32 top-12'>
                    <h3 className='font-semibold text-base lg:text-sm xl:text-base '>Lifestyle</h3>
                    <p className='my-3 opacity-50 text-base lg:text-sm xl:text-base font-medium'>Desing is a part of the</p>
                    <Link to="/" className='inline-block rounded-sm text-xs xl:text-base text-center font-semibold text-white  bg-[#F9A309] xl:py-3 xl:px-5 py-2 px-4'>Read Now</Link>
                </article>
                <div className='group w-full max-h-[600px] lg:h-full flex relative justify-center  '>
                    <img className="lg:w-1/2 w-2/3 skew-x-3 transition " src={image4} alt="" />
                    <article className='px-6 py-2 xl:px-11 xl:py-6 bg-white  absolute z-10 bottom-2  xl:right-32 right-16  '>
                        <h3 className='font-semibold text-base lg:text-sm'>Unique</h3>
                    </article>
                </div>
            </article>
        </section>
    )
}