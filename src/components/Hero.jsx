function Hero() {
  return (
    <>
      {/* hero */}
      <div id="home" className="relative">
        <div className="bg-[url('./img/bg.jpg')] h-screen md:h-[1000px] bg-no-repeat bg-center bg-cover flex justify-center items-center flex-col">
          <div className="text-white text-center">
            <h1 className="text-4xl md:text-7xl font-bold font-sacramento animate-pulse">Premium</h1>
            <h4 className="text-slate-200 font-bold font-Montserrat text-xs mb-7 animate-pulse">QUALITY</h4>
            <h1 className="text-5xl md:text-9xl font-bold font-Cormorant italic">Restaurant</h1>
            <h1 className="text-5xl md:text-9xl font-bold font-Cormorant italic">Dishes</h1>
          </div>
          {/* <a href="" className="text-black font-bold py-3 px-4 rounded-xl bg-white mt-20 ">ORDER</a> */}
        </div>
      </div>

    </>
  )
}

export default Hero;