import { useState } from "react"

function Dashboard () {

    const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu open state
    const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close menu on clicking a menu item
    const handleMenuItemClick = () => setMenuOpen(false);


  return (
    <div className="w-full h-fit flex flex-col">
      <header className="w-full h-20 bg-white flex justify-between items-center z-30 fixed top-0 left-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl ml-4 sm:ml-8 bg-white font-quicksand text-black font-extrabold w-fit">
          Red harvest honey
        </h1>

        {/* Desktop Menu */}
        <div className="hidden sm:flex text-base sm:text-lg md:text-xl font-bold text-black font-quicksand space-x-4 sm:space-x-10 md:space-x-20 lg:space-x-40 mr-2 sm:mr-4">
          <a href="./" className="hover:text-yellow-500">Home</a>
          <a href="#Contact" className="hover:text-yellow-500">Contact</a>
          <a href="#About" className="hover:text-yellow-500">About</a>
        </div>

        {/* Hamburger - Mobile Only */}
        <button
          onClick={toggleMenu}
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 mr-4"
        >
          <span
            className={`block h-1 w-8 bg-black mb-1 rounded transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`block h-1 w-8 bg-black mb-1 rounded transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-1 w-8 bg-black rounded transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </button>
      </header>

      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className="sm:hidden fixed inset-0 bg-white z-20 flex flex-col justify-center items-center">
          {["Home", "Contact", "About"].map((item, idx) => (
            <a
              key={idx}
              href={item === "Home" ? "./" : `#${item}`}
              onClick={handleMenuItemClick}
              className="w-full text-center py-6 border-b border-gray-300 font-bold text-3xl font-quicksand hover:text-yellow-500"
            >
              {item}
            </a>
          ))}
        </div>
      )}

      <main className="pt-20 h-fit flex flex-col items-center">
        <div className="w-full flex justify-center bg-amber-50 overflow-hidden">
          <img
            src="viscous.webp"
            alt="new"
            className="w-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg translate-y-[-50%] object-cover"
          />
        </div>

        <div className="-mt-20 sm:-mt-40 md:-mt-60 px-4 sm:pl-8 md:pl-16 bg-amber-50 flex flex-col md:flex-row justify-normal items-center w-full">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-6xl md:text-8xl ml-0 md:ml-6 font-playfair">
              Red harvest <br /> honey
            </h1>
            <p className="mt-4 sm:mt-6 md:mt-8 ml-0 md:ml-11 font-quicksand text-sm sm:text-base md:text-lg">
              High quality honey with no added ingredients. <br />
              It's simply raw honey straight from the hive.
            </p>
            <a href="#Products">
              <button className="mt-4 sm:mt-6 md:mt-8 ml-0 md:ml-11 font-quicksand bg-yellow-400 p-2 sm:p-3 md:p-4 hover:text-yellow-200">
                Shop now
              </button>
            </a>
          </div>

          <div className="flex justify-center md:justify-start w-full md:w-auto mt-4 md:mt-0">
            <img
              src="Pure.png"
              alt="Dripping Honey"
              className="w-96 sm:w-[28rem] md:w-[36rem] lg:w-[44rem] ml-0 md:ml-4"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;