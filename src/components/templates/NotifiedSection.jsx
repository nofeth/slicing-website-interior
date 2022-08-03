import { Link } from "react-router-dom";
export default function NotifiedSection(){
    return (
        <section className="bg-white overflow-hidden">
            <div className="flex container py-56">
                <article className="w-full flex flex-col items-center justify-center ">
                    <div className="mx-2">
                        <h2 className="font-semibold text-5xl leading-snug max-w-lg">Get notified you can still join the waitist</h2>
                        <div className="shadow-md mx-auto lg:mx-0 rounded-2xl flex justify-between mt-11 w-[95%]">
                            <input className="flex-1  pl-5 pr-3 outline-none " type="text" placeholder="Your email address"/>
                            <Link to="/" className='border-4 border-white rounded-2xl text-center font-medium text-sm inline-block  md:text-base  text-white  bg-[#F9A309] py-4 px-1 sm:px-5 sm:py-5 '>Start Trial</Link>
                        </div>
                    </div>
                </article>
             
            </div>
        </section>
    )
}