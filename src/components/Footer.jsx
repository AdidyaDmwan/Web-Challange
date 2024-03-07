import FooterSocialMedia from "./FooterSocialMedia";

function Footer() {
  return (
    <>
      <footer className="bg-slate-500">
  <div className="container mx-auto px-6 py-10 lg:px-20 flex flex-wrap justify-center lg:justify-between">
    <div className="w-full lg:w-1/4 text-white mb-8 lg:mb-0">
      <h3 className="font-bold">Sedap Malam</h3>
      <p>Sebuah restoran yang terletak tepat di tepi pantai yang menawan.</p>
    </div>
    <div className="w-full lg:w-1/4 text-white mb-8 lg:mb-0">
      <h3 className="font-bold">Jam Buka</h3>
      <p>Weekday: 10.00-21.00</p>
      <p>Weekend: 09.00-23.00</p>
    </div>
    <div className="w-full lg:w-1/4 text-white mb-8 lg:mb-0">
      <h3 className="font-bold">Contact</h3>
      <div className="flex items-center mb-2">
        <i className="fas fa-address-card mr-2"></i>
        <p>Jl. Kerang Laut no.212 Rt02 Kj002 Bikini Bottom. Kode Pos: 09273</p>
      </div>
      <div className="flex items-center mb-2">
        <i className="fas fa-phone mr-2"></i>
        <p>+628636566578</p>
      </div>
      <div className="flex items-center">
        <i className="fas fa-envelope mr-2"></i>
        <p>sedapmalam@gmail.com</p>
      </div>
    </div>
    <div className="w-full lg:w-1/4 text-white mb-8 lg:mb-0">
      <h3 className="font-bold">Social Media</h3>
      <div className="">
        <FooterSocialMedia text="@sedapmalam" />
        <FooterSocialMedia text="@sedapmalam" />
        
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer;