// components/Hero.tsx
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
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-20 ml-28">
        <h1 className="text-9xl font-semibold">
          HAVELI <span className="text-orange-500">🍽</span>
        </h1>
        <h2 className="tracking-wide mt-2 pl-72 text-5xl">Kabab $ Grill</h2>
        <p className="mt-4 max-w-3xl text-2xl">
          Step into Haveli Kabab & Grill — where every bite takes you on a royal journey of rich spices, sizzling kababs, and the timeless taste of tradition!
        </p>
      </div>
    </section>
  );
}