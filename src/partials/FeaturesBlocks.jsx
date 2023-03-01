import React from 'react';
import Easy from '../images/eassy.png';
import Cerdas from '../images/cerdas.png';
import VideoGrafi from '../images/vidio.png';
import Menari from '../images/tari.png';
import Hiburan from '../images/hiburan.png';
import Melukis from '../images/lukis.png';
import Seminar from '../images/seminar.png';



function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-white-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Roadmap Management Expo 2023</h2>
            <p className="text-xl text-gray-600"></p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
               <div className="flex-shrink-0 mr-4">
            {/* Logo */}
           
        
              <div>
              <img className="w-16 h-16 p-1 -mt-1 mb-2" src={Easy}  alt="Hero"  id="header-logo"/>
              </div>


          </div>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Kompetisi Essay</h4>
              <p className="text-gray-600 text-center">Kompetisi esai adalah kompetisi yang mengharuskan peserta untuk menulis esai tentang topik tertentu. kompetisi ini mengajarkan peserta bagaimana menulis esai yang baik dan bagaimana berpikir secara kritis tentang topik tertentu.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <div>
              <img className="w-16 h-16 p-1 -mt-1 mb-2" src={Cerdas}  alt="Hero"  id="header-logo"/>
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Kompetisi Cerdas Cermat</h4>
              <p className="text-gray-600 text-center">Kompetisi cerdas cermat adalah sebuah kompetisi yang menguji kemampuan berpikir dan kecerdasan seseorang.
               </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <div>
              <img className="w-16 h-16 p-1 -mt-1 mb-2" src={VideoGrafi}  alt="Hero"  id="header-logo"/>
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Kompetisi Videografi Budaya</h4>
              <p className="text-gray-600 text-center">Kompetisi videografi budaya adalah kompetisi yang mengajak para peserta untuk menggunakan teknologi video untuk menangkap dan menyampaikan budaya lokal.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <div>
              <img className="w-16 h-16 p-1 -mt-1 mb-2" src={Menari}  alt="Hero"  id="header-logo"/>
              </div>      
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Kompetisi Menari</h4>
              <p className="text-gray-600 text-center">Kompetisi menari adalah kompetisi yang mengumpulkan para penari untuk bersaing dalam berbagai jenis tarian.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <div>
              <img className="w-16 h-16 p-1 -mt-1 mb-2" src={Hiburan}  alt="Hero"  id="header-logo"/>
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Expo Kuliner & Hiburan</h4>
              <p className="text-gray-600 text-center">Expo kuliner dan hiburan adalah acara yang menampilkan berbagai makanan dan minuman dari berbagai daerah, serta berbagai jenis hiburan seperti musik, tarian, dan lainnya. </p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <div>
              <img className="w-16 h-16 p-1 -mt-1 mb-2" src={Melukis}  alt="Hero"  id="header-logo"/>
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Kompetisi Melukis</h4>
              <p className="text-gray-600 text-center">Kompetisi melukis adalah kompetisi yang mengajak para peserta untuk menggambar atau melukis sesuatu berdasarkan tema yang telah ditentukan.</p>
            </div>

          </div>

            {/* 7st item */}
           
       
        </div>


            <div className='items-center max-w-sm mx-auto grid gap-1 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none'>
                <div className="relative flex flex-col items-center p-6 bg-white ">
                </div>
                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <img className="w-16 h-16 p-1 -mt-1 mb-2" src={Seminar}  alt="Hero"  id="header-logo"/>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Seminar</h4>
                <p className="text-gray-600 text-center">Seminar adalah suatu acara yang diadakan untuk membahas suatu topik tertentu.</p>
              
              </div>
              <p></p>
              
            </div>
            
              <div className='mt-6'></div>
            <div className="relative flex flex-col items-center p-6 bg-white " >
            <p></p>
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-10 mt-6 ">REGISTER HERE</h4> 
            <div className='flex-shrink-0 mr-4 '>
                  <div className='max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none'>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:p-5  sm:mt-5 " href="https://bit.ly/PendaftaranEssayManajemenExpo23"> Kompetisi Essay</a>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:p-5  sm:mt-5 " href="https://bit.ly/PendaftaranLCCManajemenExpo23"> Kompetisi Cerdas Cermat</a>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:p-5  sm:mt-5 " href="https://bit.ly/PendaftaranVideografiManajemenExpo23"> Kompetisi Videografi</a>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:p-5  sm:mt-5 " href="https://bit.ly/PendaftaranMelukisManajemenExpo23"> Kompetisi Melukis</a>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:p-5  sm:mt-5 " href="https://bit.ly/PendaftaranTariManajemenExpo23"> Kompetisi Tari</a>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:p-5  sm:mt-5 " href="">Seminar</a>
                   </div>
            </div>
  
            </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
