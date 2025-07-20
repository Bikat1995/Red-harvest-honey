function Contact () {
    return (
        <>
            <div id="Contact">
                <div className="text-center font-quicksand">
                    <p className="text-amber-800  underline pt-10">Contact us</p>
                    <h1 className="text-4xl font-bold pt-5">Get in touch</h1>
                </div>
                <div className="flex flex-col  items-center">
                <div className="bg-gray-200 justify-normal mt-10 p-10 w-96">
                    <input type="text" placeholder="Your name" className="w-72 h-9 mb-8 font-quicksand" />
                    <input type="text" placeholder="Your email" className="w-72 h-9 mb-8 font-quicksand" />
                    <textarea name="message" placeholder="Your message" className="w-72 h-28 mb-8 font-quicksand"></textarea>
                    <button className="bg-teal-100 w-32 h-9 ml-20 font-quicksand hover:text-teal-50">Submit</button>
                </div>
                </div>
            </div>
        </>
    )
}

export default Contact