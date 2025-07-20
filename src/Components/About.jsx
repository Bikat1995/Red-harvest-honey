function About () {
    return (
        
            <div id="About" className="px-4 sm:px-8 md:px-16 lg:px-32">
            {/* Title for the Paragraph */}
            <p className="text-amber-800 text-center font-quicksand underline pt-11 text-sm sm:text-base md:text-lg">
                About us
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl pt-8 pb-8 text-center font-playfair underline leading-tight">
                Honey that you <span className="bg-yellow-300">won't</span>
                <br />find anywhere else
            </h2>

            <p className="font-quicksand mx-auto mb-20 max-w-4xl text-center sm:text-left text-sm sm:text-base md:text-lg leading-relaxed">
                At Red Harvest Honey, we believe in purity and quality. Our honey is 100% natural, raw, and unprocessed,
                <br className="hidden sm:block" />
                sourced directly from trusted local beekeepers. We take pride in offering you honey just as nature intended — rich in taste,
                <br className="hidden sm:block" />
                nutrients, and health benefits. With every jar, we promise you authentic goodness straight from the hive to your home.
            </p>

            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
                {/* Image and Title Aligned at Start */}
                <img
                src="honeylemon.jpg"
                alt="Honey lemon"
                className="ml-5 min-w-[18rem]" 
                style={{
                    clipPath: 'polygon(50% 0%, 85% 25%, 85% 75%, 50% 100%, 15% 75%, 15% 25%)',
                }}
                />

                <div className="flex flex-col max-w-xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-center md:text-left font-playfair mt-8 md:mt-20">
                    The finest quality
                </h1>

                <p className="mt-6 font-quicksand text-center sm:text-left text-sm sm:text-base md:text-lg leading-relaxed">
                    Red Harvest Honey brings you the pure, natural taste of Ethiopian honey.
                    <br />
                    Sourced from the rich lands and diverse flowers of Ethiopia, our honey is smooth,
                    <br />
                    sweet, and full of natural goodness. We are proud to continue Ethiopia’s tradition of
                    <br />
                    producing some of the world’s finest honey, offering you real, unprocessed honey with unmatched taste and quality.
                </p>

                <a href="#Products" className="self-center sm:self-start">
                    <button className="mt-8 font-quicksand bg-yellow-400 hover:text-yellow-200 p-4 w-40">
                    Shop now
                    </button>
                </a>
                </div>
            </div>
            </div>
    )
}

export default About