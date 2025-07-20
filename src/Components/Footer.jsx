function Footer () {
    return (
        <>
<div className="bg-yellow-700">
  <footer className="bg-yellow-700 mt-14 py-6 px-5 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between text-white border-b border-white">
    {/* Brand Section */}
    <div className="mb-6 md:mb-0 text-center md:text-left md:flex-shrink-0">
      <h2 className="font-playfair font-bold text-3xl sm:text-4xl">Red harvest honey</h2>
      <p className="font-quicksand pt-2 max-w-xs mx-auto md:mx-0 text-sm sm:text-base">
        Discover the rich tradition of Ethiopian honey.
      </p>
    </div>

    {/* Quick Links and Reach Us Section */}
    <div className="flex flex-col md:flex-row items-center md:items-start flex-1 justify-center md:justify-end space-y-8 md:space-y-0 md:space-x-32">
      {/* Quick Links Section */}
      <div className="flex flex-col items-center md:items-start space-y-2">
        <h1 className="font-playfair font-bold text-2xl">Quick links</h1>
        <a href="./" className="hover:text-yellow-500 font-quicksand text-base">Home</a>
        <a href="#Contact" className="hover:text-yellow-500 font-quicksand text-base">Contact</a>
        <a href="#About" className="hover:text-yellow-500 font-quicksand text-base">About</a>
      </div>

      {/* Reach Us Section */}
      <div className="flex flex-col items-center md:items-start">
        <h1 className="font-playfair font-bold text-2xl mb-2">Reach us</h1>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/" aria-label="Instagram">
            <img
              src="instagram-new.png"
              alt="Instagram"
              className="w-10 h-10 transition-transform duration-300 hover:scale-125"
            />
          </a>
          <a href="https://x.com/" aria-label="Twitter">
            <img
              src="twitterx.png"
              alt="Twitter"
              className="w-10 h-10 transition-transform duration-300 hover:scale-125"
            />
          </a>
          <a href="https://web.facebook.com/" aria-label="Facebook">
            <img
              src="facebook-new.png"
              alt="Facebook"
              className="w-10 h-10 transition-transform duration-300 hover:scale-125"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>

  <p className="text-center text-sm font-quicksand text-white mt-5 pb-5">
    © 2025 Red harvest honey. All Rights Reserved
  </p>
</div>

        </>
    )
}

export default Footer