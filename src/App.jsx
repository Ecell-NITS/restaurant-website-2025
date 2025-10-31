import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/home';
import Menu from './pages/Menu/menu';
import './App.css';

function App() {
  return (
    <Router>
      <header className="w-full">
        <navbar className="w-full max-w-screen flex h-[17vh] sm:h-[18vh] md:h-[19vh] lg:h-[20vh] xl:h-[21vh] 2xl:h-[22vh] justify-between bg-[#2B1E1A] items-center ">
          <div className="flex justify-center items-center flex-shrink-0 pl-[3%] md:pl-[4%] sm:pl-[5%] lg:pl-[6%]">
            <img
              src="https://res.cloudinary.com/dw3n9vflw/image/upload/v1760812231/Intersect_1_kspfba.jpg"
              className="h-[9vh] sm:h-[10vh] md:h-[11vh] lg:h-[12vh] flex justify-center items-center rounded-[50%] bg-[#D9D9D9]"
            ></img>
          </div>

          <div className="w-full max-w-full flex justify-center pl-[6%] md:pl-[8.5%] sm:pl-[9%] lg:pl-[10.5%] xl:pl-[11%] 2xl:pl-[12%] items-center flex-nowrap space-x-[2.5%] md:space-x-[4%] lg:space-x-[5%] xl:space-x-[7%] 2xl:space-x-[9%] text-[#EBCCB4] text-[clamp(80%, xl, 100%)] font-lily 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-xs">
            <div>
              <Link to="/Home" className=" hover:underline">
                Home
              </Link>
            </div>

            <div>
              <Link to="/menu" className="hover:underline">
                Menu
              </Link>
            </div>

            <div>
              <Link to="/visit" smooth={true} duration={600} className="hover:underline">
                VisitUs
              </Link>
            </div>

            <div>
              <Link to="/Serives" className=" hover:underline">
                Services
              </Link>
            </div>

            <div>
              <Link to="/Review" className="hover:underline">
                Review
              </Link>
            </div>
          </div>
        </navbar>
      </header>

      <herosection>
        <firstbar>
          <div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dw3n9vflw/image/upload/v1760897898/89628d4c2e2e9745a409008fe1aa0c6d1ca7c9d4_rb4xn8.jpg"
                className="bg-cover w-screen h-[100vh]"
              />
            </div>

            <div className="absolute mt-[59vh] sm:mt-[56vh] md:mt-[56vh] lg:mt-[58vh] ml-[-4vw] sm:ml-[-8vw] md:ml-[-8vw] lg:ml-[-20vw] inset-0 flex flex-col text-center leading-none text-[16vw] md:text-[15vw] lg:text-[9vw] w-full h-[10vh]">
              <p className="text-[#861D1D] [-webkit-text-stroke:0.008em_#E8E2D1] playfair">
                Welcome To <br /> Hogsmede{' '}
              </p>
            </div>
          </div>

          <div className="absolute gap-[4vw] mt-[-30vh] ml-[4vw] md:pt-[9vh] lg:pt-[7vh] flex flex-row">
            <div className="bg-[#BF6F31] w-[34vw] h-[5.02vh] md:w-[40vw] md:h-[9vh] lg:w-[34vw] lg:h-[11vh] rounded-full">
              <p>
                <Link
                  to="/menu"
                  className="text-[#FFFFFF] hover:underline instrument-serif font-medium text-[5vw] md:text-[5vw] lg:text-[4vw] flex items-center justify-center"
                >
                  View Menu
                </Link>
              </p>
            </div>

            <div className="bg-[#BF6F31] w-[34vw] h-[5.02vh] md:w-[40vw] md:h-[9vh] lg:w-[34vw] lg:h-[11vh] rounded-full">
              <p>
                <Link
                  to="/menu"
                  className="text-[#FFFFFF] hover:underline instrument-serif font-medium text-[5vw] md:text-[5vw] lg:text-[4vw] flex items-center justify-center"
                >
                  Order Now
                </Link>
              </p>
            </div>
          </div>
        </firstbar>
      </herosection>

      <thirdsection>
        <div className="w-full h-[13vh] md:h-[20vh] lg:h-[25vh] overflow-hidden bg-[#2B1E1A]">
          <p className="text-[#861D1D] itelianno flex justify-center pt-[2vh] items-center font-normal text-[10vw] md:text-[8vw]">
            Serving taste since 1990
          </p>
        </div>
      </thirdsection>

      <fourthsection className="w-full h-[100vh]">
        <div className="relative overflow-hidden items-center justify-center w-[100vw] h-[40vh] md:h-[100vh] bg-[#E8E2D1]">
          <div className="bg-[#E8E2D1] absolute flex justify-center items-center">
            <img
              src="https://res.cloudinary.com/dw3n9vflw/image/upload/v1760954955/6-pcs-13-scalloped-shell-pattern-plastic-serving-plates-30869055340607_700x700-removebg-preview_1-removebg-preview_eufgsx.png"
              className="w-[55vw] h-[20vh] ml-[17vw] mt-[-3vh] md:ml-[26vw] lg:ml-[26vw] sm:w-[37vw] sm:h-[29vh] md:w-[43vw] md:h-[33vh] lg:w-[44vw] lg:h-[49vh] xl:w-[46vw] xl:h-[52vh] justify-center items-center "
            ></img>
          </div>

          <div className="relative ">
            <div className="circle-item absolute top-1/2 left-1/2 w-[12vw] h-[12vw]">
              <img
                src="https://res.cloudinary.com/dw3n9vflw/image/upload/v1761049896/Food_Img_5_ivo75w.jpg"
                className="absolute w-full h-full rounded-full object-cover"
              />
            </div>

            <div className="circle-item absolute top-1/2 left-1/2 w-[12vw] h-[12vh]">
              <img
                src="https://res.cloudinary.com/dw3n9vflw/image/upload/v1761159124/Food_Img_4_z0gzse.jpg"
                className="absolute w-full h-full rounded-full object-cover"
              />
            </div>

            <div className="circle-item absolute top-1/2 left-1/2 w-[12vw] h-[12vw]">
              <img
                src="https://res.cloudinary.com/dw3n9vflw/image/upload/v1761159359/Food_Img_2_qju8sy.jpg"
                className="absolute w-full h-full rounded-full object-cover"
              />
            </div>

            <div className="circle-item absolute top-1/2 left-1/2 w-[12vw] h-[12vw]">
              <img
                src="https://res.cloudinary.com/dw3n9vflw/image/upload/v1761159374/Food_Img_3_bsu2oz.jpg"
                className="absolute w-full h-full rounded-full object-cover"
              />
            </div>

            <div className="circle-item absolute top-1/2 left-1/2 w-[12vw] h-[12vw]">
              <img
                src="https://res.cloudinary.com/dw3n9vflw/image/upload/v1761159376/Food_Img_6_refzla.jpg"
                className="absolute w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </fourthsection>

      <fifthsection>
        <div className="w-full h-[13vh] md:h-[20vh] lg:h-[25vh] overflow-hidden bg-[#2B1E1A]">
          <p className="text-[#861D1D] itelianno flex justify-center pt-[2vh] items-center font-normal text-[10vw] md:text-[8vw]">
            Visit Us
          </p>
        </div>
      </fifthsection>

      <sixthsection className="w-full h-[100vh] bg-[#E8E2D1]">
        <div className="flex px-[4vw] py-[4vh] flex-row gap-[3vw]">
          <div className="w-[50vw] bg-[#F4B34C] px-[4vw] py-[4vh]"></div>

          <div className="w-[50vw]">
            <div className="">
              <img
                src="https://res.cloudinary.com/dw3n9vflw/image/upload/v1761162337/Frame_20_yktd4a.jpg"
                className=""
              ></img>
              <img
                src="https://res.cloudinary.com/dw3n9vflw/image/upload/v1761940959/Frame_22_1_tihnuq.jpg"
                className=""
              ></img>
            </div>
          </div>
        </div>
      </sixthsection>

      <seventhsection>
        <div className="w-full h-[13vh] md:h-[20vh] lg:h-[25vh] overflow-hidden bg-[#2B1E1A]">
          <p className="text-[#861D1D] itelianno flex justify-center pt-[2vh] items-center font-normal text-[10vw] md:text-[8vw]">
            Our Services
          </p>
        </div>
      </seventhsection>

      <eightsection>
        <div className="w-full h-[40vh] md:h-[100vh] bg-[#E8E2D1]">
          <div className="flex justify-center items-top flex-row py-[1vh] px-[3vw] gap-[7vw]">
            <p className="itelianno font-normal text-[10vw]">Birthdays</p>
            <p className="itelianno font-normal text-[10vw]">Weddings</p>
            <p className="itelianno font-normal text-[10vw]">Events</p>
          </div>

          <div className="flex justify-center items-top flex-row px-[4vw] gap-[6vw]">
            <div className="">
              <img
                src="https://res.cloudinary.com/dw3n9vflw/image/upload/v1761943873/3c90ed204fd9f7a31c3c75e352136cd5879096da_hyb4ot.jpg"
                className=""
              ></img>
            </div>

            <div className="">
              <img
                src="https://res.cloudinary.com/dw3n9vflw/image/upload/v1761944255/950c3e821b60df696936740bb9032ca712a159cb_olcng4.jpg"
                className=""
              ></img>
            </div>

            <div className="">
              <img
                src="https://res.cloudinary.com/dw3n9vflw/image/upload/v1761944265/0e0fdcf2f4457eb77883ff7ee28517edea39506a_jku6tr.jpg"
                className=""
              ></img>
            </div>
          </div>

          <div className="flex justify-center items-top leading-none flex-row py-[4vh] px-[4vw] gap-[6vw]">
            <p className="itelianno  text-[#861D1D] font-normal text-[3vw]">
              Pizza ipsum dolor meat lovers buffalo. Party chicken chicken lovers Bianca ipsum
              spinach crust buffalo spinach.
            </p>
            <p className="itelianno text-[#861D1D] font-normal text-[3vw]">
              Pizza ipsum dolor meat lovers buffalo. Party chicken chicken lovers Bianca ipsum
              spinach crust buffalo spinach.
            </p>
            <p className="itelianno text-[#861D1D] font-normal text-[3vw]">
              Pizza ipsum dolor meat lovers buffalo. Party chicken chicken lovers Bianca ipsum
              spinach crust buffalo spinach.
            </p>
          </div>
        </div>
      </eightsection>

      <ninesection>
        <div className="w-full h-[13vh] md:h-[20vh] lg:h-[25vh] overflow-hidden bg-[#2B1E1A]">
          <p className="text-[#861D1D] itelianno flex justify-center pt-[2vh] items-center font-normal text-[10vw] md:text-[8vw]">
            Thankyou
          </p>
        </div>
      </ninesection>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
