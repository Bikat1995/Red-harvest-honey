function Products () {
    return (
        <>
        
            <div id="Products" className="mt-10 pt-10 w-full min-h-screen relative">
            {/* Hexagonal Background */}
            <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-full bg-amber-100"
                style={{
                clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                }}
            ></div>

            {/* Text Content */}
            <div className="relative text-center font-quicksand z-10 px-4 sm:px-8">
                <p className="text-amber-800 underline">Products</p>
                <h1 className="pt-5 text-3xl sm:text-4xl md:text-4xl font-bold">Featured products</h1>
                <p className="pt-5 text-sm sm:text-base max-w-xl mx-auto">
                We offer a variety of honey that's sure to satisfy <br className="hidden sm:inline" /> your taste buds.
                </p>

                {/* Products with labels underneath */}
                <div className="flex flex-col sm:flex-row justify-between mt-14 gap-8 sm:gap-4 px-4 sm:px-0">
                {/* Product 1 */}
                <div className="flex flex-col items-center">
                    <img
                    src=""
                    alt="product 1"
                    className="bg-teal-100 w-full sm:w-72 h-72 object-cover rounded"
                    />
                    <p className="mt-3">
                    <span className="bg-gray-500 text-white px-3 py-1 rounded">Honey type</span>
                    </p>
                </div>

                {/* Product 2 */}
                <div className="flex flex-col items-center">
                    <img
                    src=""
                    alt="product 2"
                    className="bg-teal-100 w-full sm:w-72 h-72 object-cover rounded"
                    />
                    <p className="mt-3">
                    <span className="bg-gray-500 text-white px-3 py-1 rounded">Honey type</span>
                    </p>
                </div>

                {/* Product 3 */}
                <div className="flex flex-col items-center">
                    <img
                    src=""
                    alt="product 3"
                    className="bg-teal-100 w-full sm:w-72 h-72 object-cover rounded shadow-2xl"
                    />
                    <p className="mt-3">
                    <span className="bg-gray-500 text-white px-3 py-1 rounded">Honey type</span>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Products