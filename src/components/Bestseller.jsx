function Bestseller() {
    return (
      <>
        {/* Bestseller */}
        <section className="content bg-white flex justify-center" id="bestseller">
  <div className="container py-20 px-6 lg:px-20 flex flex-col gap-5 text-center">
    <div className="text-black">
      <div className="mb-12 mx-auto" data-aos="fade-down" data-aos-duration="5000">
        <h1 className="text-4xl md:text-6xl font-bold font-Cormorant">Best Seller</h1>
        <h4 className="text-xs md:text-sm text-slate-400 font-Montserrat">-----sedap malam-----</h4>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <img className="p-2 w-[40%] h-auto rounded-full border border-l-8 border-b-8 border-solid border-slate-400 mx-auto md:ml-0" data-aos="fade-right" src="https://cdn.pixabay.com/photo/2023/12/26/07/31/ai-generated-8469680_960_720.jpg" alt="" />
        <div className="my-5 md:ml-5" data-aos="zoom-in">
          <h2 className="text-3xl md:text-5xl mb-3 font-bold font-Cormorant">Rendang</h2>
          <p className="text-sm md:text-base font-Montserrat text-slate-500 md:ml-0">
            Selamat datang di petualangan rasa yang tak tertandingi dengan Rendang kami yang legendaris. Hidangan khas dari tanah Minangkabau, Rendang adalah simfoni cita rasa yang melahirkan keajaiban di lidah Anda. Daging sapi empuk yang direndang dalam campuran rempah-rempah khas Indonesia, diolah dengan cermat hingga memunculkan harmoni antara pedas, manis, dan gurih yang memikat. Setiap suapan adalah perjalanan melintasi hutan rempah yang kaya, membangkitkan kenangan akan aroma bumbu tradisional yang terasa hingga ke lubuk hati. Nikmati kelezatan yang tiada tara dari Rendang kami, sebuah mahakarya kuliner yang menyatukan budaya dan cita rasa dalam setiap gigitannya.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      </>
    )
  }
  
  export default Bestseller;