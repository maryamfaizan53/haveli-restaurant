// // components/Hero.tsx
// export default function HomePage() {
//   return (
//     <section className="relative h-screen w-full bg-black text-white overflow-hidden">
//       {/* Background Video or Image */}
//       <div className="absolute inset-0">
//         <video
//           autoPlay
//           loop
//           muted
//           className="w-full h-full object-cover contrast-110 brightness-105"
//           src="/home/home.mp4" 
//         ></video>
//         <div className="absolute inset-0 bg-black opacity-50" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-20 ml-28">
//         {/* <h1 className="text-9xl font-semibold text-[#c19d60] tracking-wider"> */}
//         <h1 className="text-9xl font-semibold tracking-wider text-transparent bg-gradient-to-r from-[#c19d60] via-[#FFA500] to-[#080501] bg-[length:300%_300%] bg-clip-text animate-shimmer">
//   {/* Haveli
// </h1> */}

//           HAVELI <span className="text-transparent bg-gradient-to-r from-[#902828] via-[#ffad15] to-[#080501] bg-[length:300%_300%] bg-clip-text animate-shimmer">🍽</span>
//         </h1>
//         <h2 className="tracking-wide mt-2 pl-72 text-5xl">Kabab $ Grill</h2>
//         <p className="mt-4 max-w-3xl text-2xl">
//           Step into Haveli Kabab & Grill — where every bite takes you on a royal journey of rich spices, sizzling kababs, and the timeless taste of tradition!
//         </p>
//       </div>
//     </section>
//   );
// }
// // components/Hero.tsx
// // export default function HomePage() {
// //   return (
// //     <section className="relative h-screen w-full bg-black text-white overflow-hidden">
// //       {/* Background Video or Image */}
// //       <div className="absolute inset-0">
// //         <video
// //           autoPlay
// //           loop
// //           muted
// //           className="w-full h-full object-cover contrast-110 brightness-105"
// //           src="/home/home.mp4" 
// //         ></video>
// //         <div className="absolute inset-0 bg-black opacity-50" />
// //       </div>

// //       {/* Content */}
// //       <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-20 ml-28">
// //         <h1 className="text-9xl font-semibold tracking-wider gradient-golden transition-all duration-300 ease-in-out cursor-pointer">
// //           HAVELI <span className="text-orange-500">🍽</span>
// //         </h1>
// //         {/* <h1 className="text-5xl font-bold tracking-wide font-serif">HAVELi<span className="text-orange-500">🍽</span></h1> */}

// //         <h2 className="tracking-wide mt-2 pl-72 text-5xl">Kabab $ Grill</h2>
// //         <p className="mt-4 max-w-3xl text-2xl">
// //           Step into Haveli Kabab & Grill — where every bite takes you on a royal journey of rich spices, sizzling kababs, and the timeless taste of tradition!
// //         </p>
// //       </div>
// //     </section>
// //   );
// // }
export default function HomePage() {
  return (
    <section className="relative h-screen w-full bg-black text-white overflow-hidden">
      {/* Background Video or Image */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover contrast-110 brightness-105"
          src="/home/home.mp4"
        ></video>
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold tracking-wider text-transparent bg-gradient-to-r from-[#c19d60] via-[#FFA500] to-[#080501] bg-[length:300%_300%] bg-clip-text animate-shimmer">
          HAVELI{" "}
          <span className="text-transparent bg-gradient-to-r from-[#902828] via-[#ffad15] to-[#080501] bg-[length:300%_300%] bg-clip-text animate-shimmer">
            🍽
          </span>
        </h1>

        <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-wide">
          Kabab & Grill
        </h2>

        <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl">
          Step into Haveli Kabab & Grill — where every bite takes you on a royal
          journey of rich spices, sizzling kababs, and the timeless taste of
          tradition!
        </p>
      </div>
    </section>
  );
}
