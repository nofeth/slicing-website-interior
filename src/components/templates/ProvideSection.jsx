import { Link } from "react-router-dom";

export default function ProvideSection(){
    return (
        <section className="bg-white flex h-[700px] gap-5">
            <article className="lg:w-1/2 hidden lg:block"></article>
            <article className="w-full lg:w-1/2 relative ml-10">
                <h2 className="font-semibold text-4xl lg:text-5xl leading-snug mt-20 lg:mt-36 max-w-xs">We provide Best services</h2>
                <p className="mt-10 max-w-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut accusamus aperiam saepe rerum accusantium magni 
                    minus aliquam similique iusto tempora. Facilis doloribus repellat, accusantium molestiasa sdasdsaada sdasd asdasasdasda sdasdasdasd  dolore temporibus quos est ipsam!</p>
                <Link to="/" className='inline-block rounded-sm absolute lg:bottom-20 mt-11 lg:mt-0 text-center font-semibold text-white  bg-[#F9A309] py-5 px-10 '>Read Now</Link>
            </article>
        </section>
    )
}