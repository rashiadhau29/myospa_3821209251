import { FiChevronDown } from "react-icons/fi";

const Home = () => {
  return (
    <section className="relative w-full overflow-hidden pt-[64px] bg-black">
      {/* DESKTOP */}
      <div className="hidden md:block w-full h-[calc(100vh-70px)]">
        <video
          src="/img/banner3.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* MOBILE FIXED FULL WIDTH */}
      <div className="block md:hidden w-full h-[35vh] bg-black overflow-hidden">
        <video
          src="/img/banner3.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="block w-screen h-full object-cover object-center"
        />
      </div>

      {/* CENTER OF EXCELLENCE TEXT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Centre Of Excellence
        </h1>

        <p className="text-sm md:text-xl text-white/90">
          Comprehensive solutions designed to transform your business
        </p>
      </div>

      {/* CTA */}
      <div
        className="
          absolute bottom-24 right-3
          md:bottom-40 md:right-10
          z-10
        "
      >
        <a href="/contact">
          <button
            className="
              inline-flex items-center gap-1
              px-3 py-2
              text-[9px]
              md:px-10 md:py-4
              md:text-sm
              bg-gradient-to-r from-primary via-primary to-orange-500
              text-white font-semibold md:font-bold
              rounded-lg md:rounded-full
              whitespace-nowrap
              shadow-xl hover:shadow-2xl
              transform hover:scale-105
              transition-all duration-300
              border-2 border-white/30 hover:border-white
            "
          >
            Start Your Project
            <FiChevronDown className="-rotate-90 text-[9px] md:text-sm" />
          </button>
        </a>
      </div>
    </section>
  );
};

export default Home;