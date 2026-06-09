// import { FiChevronDown } from "react-icons/fi";

// const Home = () => {
//   return (
//     <section
//       className="relative w-full bg-black overflow-x-hidden"
//       style={{ paddingTop: "70px" }} // fallback for mobile
//     >
//       {/* DESKTOP / TABLET BANNER */}
// {/* DESKTOP */}
// <div className="hidden md:block w-full">
//   <div className="relative w-full h-[calc(100vh-90px)] bg-black flex items-center justify-center">
//     <video
//       src="/img/banner3.mp4"
//       autoPlay
//       muted
//       loop
//       playsInline
//       className="w-full h-full object-cover object-[50%_50%]"
//     />
//   </div>
// </div>

// {/* MOBILE */}
// <div className="block md:hidden w-full">
//   <div className="relative w-full h-[40vh] bg-black flex items-center justify-center">
//     <video
//       src="/img/banner3.mp4"
//       autoPlay
//       muted
//       loop
//       playsInline
//       className="w-full h-full object-cover object-center"
//     />
//   </div>
// </div>

//       {/* CTA BUTTON */}
//       <div className="
//         absolute bottom-6 right-1/2 translate-x-1/2
//         md:right-10 md:translate-x-0
//         z-10
//       ">
//         <a href="/contact">
//           <button className="
//             inline-flex items-center gap-3
//             px-5 py-3 md:px-8 md:py-4
//             text-sm md:text-lg
//             bg-gradient-to-r from-blue-950 to-emerald-600
//             text-white font-bold rounded-2xl
//             hover:from-green-600 hover:to-emerald-700
//             transition-all duration-300
//           ">
//             Start Your Project Today
//             <FiChevronDown className="-rotate-90 text-xl" />
//           </button>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Home;
import { FiChevronDown } from "react-icons/fi";

const Home = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden pt-[70px]">

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
      <div className="block md:hidden w-full-[35vh] bg-black overflow-hidden">
        <video
          src="/img/banner3.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="block w-screen h-full object-cover object-center"
        />
      </div>

      {/* CTA */}
      <div className="
        absolute bottom-3 right-3
        md:bottom-4 md:right-10
        z-10
      ">
        <a href="/contact">
          <button className="
            inline-flex items-center gap-1
            px-3 py-2
            text-[10px]
            md:px-8 md:py-4
            md:text-lg
            bg-gradient-to-r from-blue-950 to-emerald-600
            text-white font-semibold md:font-bold
            rounded-lg md:rounded-2xl
            whitespace-nowrap
          ">
            Start Your Project
            <FiChevronDown className="-rotate-90 text-sm md:text-xl" />
          </button>
        </a>
      </div>

    </section>
  );
};

export default Home;