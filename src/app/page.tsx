"use client";
import background from "../../public/img/Prb_Header.png";
import pic1 from "../../public/img/Pic1.png";
import pic2 from "../../public/img/Pic2.png";
import pic3 from "../../public/img/Pic3.png";
import pic4 from "../../public/img/Pic4.png";
import pic5 from "../../public/img/Pic5.png";
import pic6 from "../../public/img/Pic6.png";
import pic7 from "../../public/img/Pic7.png";
import pic8 from "../../public/img/Pic8.png";
import pic9 from "../../public/img/Pic9.png";
import pic10 from "../../public/img/Pic10.png";
import join from "../../public/img/JoinUs.png";
import logo from "../../public/img/icongrab.png";
import Navbar from "./Navbar";
import Counter from "./counter";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div
        className="hero min-h-screen  bg-blend-darken !bg-no-repeat !bg-cover"
        style={{
          background: `linear-gradient(0deg, rgba(2,0,36,0.4962359943977591) 0%, rgba(9,9,121,0) 51%, rgba(0,0,0,0.5) 100%) ,url(${background.src})`,
        }}
      >
        <Navbar />
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content flex-col lg:flex-row">
          <div className="flex-1 w-[400px] hidden sm:flex"></div>
          <div className="flex flex-col gap-20 md:gap-52">
            <section>
              <h1 className="text-5xl md:text-7xl xl:text-[4.5rem] font-bold not-prose text-white uppercase leading-tight">
                Lorem, ipsum
              </h1>
              <div className="bg-white pb-1">
                <h1 className="text-5xl md:text-7xl xl:text-[4.5rem] font-bold not-prose text-black uppercase leading-none">
                  Lorem, ipsum dolor.
                </h1>
              </div>
              <h1 className="text-5xl md:text-7xl xl:text-[4.5rem] font-bold not-prose text-white uppercase leading-tight">
                Lorem, ipsum
              </h1>
            </section>

            <button className="btn btn-lg bg-themegreen border-none text-white uppercase self-start">
              What is next
            </button>
          </div>
        </div>
      </div>

      <section className="bg-themegreen w-full min-h-44 p-4 py-7">
        <div className="container flex flex-col text-center md:text-left lg:flex-row gap-5 lg:gap-16 h-full flex-1 justify-center items-center">
          <h2 className="text-white !m-0">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <Counter />
        </div>
      </section>

      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 w-[100vw] max-w-[90vw] items-center">
          <img
            src={pic1.src}
            className="max-w-3xl w-64 lg:w-[670px] shadow-2xl rounded-none"
          />
          <div>
            <h1 className="text-4xl lg:text-7xl font-bold not-prose max-w-2xl text-black">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="py-6 max-w-2xl text-black leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              maxime ducimus alias rerum possimus id facilis earum quis
              asperiores! Nisi cum voluptate quisquam aut recusandae molestias
              eaque, vero sed ex quibusdam cumque quia atque obcaecati saepe
              ducimus consectetur possimus modi eius deleniti eum impedit
              deserunt. Magnam voluptates atque vitae nostrum illum quasi
              debitis. Quod vitae perferendis, ipsum ipsa, repellendus soluta
              voluptatem fugiat dolores fugit corrupti veritatis, aspernatur
              porro deleniti voluptatibus ullam quis totam corporis nobis modi
              quo! Laboriosam ea saepe magnam veniam id, laudantium numquam
              sapiente minima suscipit perspiciatis sed officiis reiciendis
              placeat similique! Eos iusto unde pariatur? Harum, accusantium
              saepe dolorem voluptatem accusamus natus nostrum, aspernatur modi
              hic reiciendis quam qui delectus. Praesentium dolor facilis
              aspernatur voluptatibus facere esse obcaecati, ad magni maxime
              officiis, nobis beatae tempora?
            </p>
          </div>
        </div>
      </div>

      <section className="hero min-h-screen bg-base-200 pb-32">
        <div className="hero-content text-center max-w-none flex-col gap-7">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold !m-0 pt-20">Lorem, ipsum.</h1>
            <p className="py-9 !m-0">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Lorem ipsum dolor sit. Lorem, ipsum.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[30rem] w-[80vw] gap-5 container">
            <div className="w-full h-full bg-green-600 flex flex-col">
              <img src={pic2.src} alt="pic2" className="w-full h-full" />
              <h3 className="text-white font-bold !m-0 py-6">Lorem, ipsum.</h3>
            </div>
            <div className="w-full h-full bg-green-600  flex flex-col">
              <img src={pic3.src} alt="pic2" className="w-full h-full" />

              <h3 className="text-white font-bold !m-0 py-6">Lorem, ipsum.</h3>
            </div>
            <div className="w-full h-full bg-green-600  flex flex-col">
              <img src={pic4.src} alt="pic2" className="w-full h-full" />

              <h3 className="text-white font-bold !m-0 py-6">Lorem, ipsum.</h3>
            </div>
          </div>
          <button className="btn btn-neutral btn-outline btn-lg uppercase font-bold mt-12">
            Learn more
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 w-full bg-themegreen h-screen items-center">
        <div className="flex flex-col gap-4 p-10 xl:pl-32 items-center lg:items-start">
          <h1 className="2xl:max-w-xl !text-6xl 2xl:!text-[5.5rem] font-semibold text-white">
            Lorem ipsum dolor sit amet, consectetur.
          </h1>
          <button className="btn uppercase font-bold btn-lg btn-wide xl:w-full max-w-lg">
            Lorem ipsum dolor sit.
          </button>
          <button className="btn  btn-outline border-white text-white uppercase font-bold btn-lg btn-wide xl:w-full max-w-lg">
            Lorem ipsum dolor sit amet.
          </button>
        </div>
        <div
          className="flex flex-col gap-4 p-20 bg-green-600 bg-no-repeat bg-cover h-full w-full"
          style={{
            backgroundImage: `url(${pic5.src})`,
            backgroundPosition: "bottom -120px right -5px",
          }}
        ></div>
      </section>

      <section className="container flex flex-col items-center my-36 gap-8">
        <h1>Lastest videos</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-12 items-center">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div className="relative" key={idx}>
              <i className="fa-solid fa-play absolute text-white text-4xl top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
              <img src={pic4.src} alt="video pic" className="max-h-56 w-full" />
              <p className="font-semibold">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          ))}
        </div>
        <button className="btn uppercase bg-green-600 border-green-600 btn-wide text-white mt-8 text-2xl btn-lg">
          view all
        </button>
      </section>

      <section
        className="grid grid-cols-1 lg:grid-cols-2 w-full h-screen bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${join.src})` }}
      >
        <div></div>
        <div className="p-4 lg:p-12 lg:pl-20 flex flex-col gap-8 justify-center">
          <h1 className="!m-0 !text-7xl text-white uppercase font-semibold pb-4">
            Join us.
          </h1>
          <p className="!m-0 max-w-2xl text-2xl text-white pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="grid grid-cols-2 gap-5 max-w-xl">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Surname"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Phone"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Department"
              className="input input-bordered w-full  col-span-2"
            />
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered textarea-lg w-full  col-span-2"
            ></textarea>
          </div>
          <button className="btn btn-lg bg-green-600 border-green-600 max-w-48 text-white uppercase">
            i´m in
          </button>
          <h4 className="max-w-xl text-white !m-0 font-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
            ut iste quos perspiciatis sed molestiae libero.
          </h4>
        </div>
      </section>

      <section
        className="flex w-full h-screen bg-base-200 bg-no-repeat bg-cover items-center p-5 lg:pl-32"
        style={{ backgroundImage: `url(${pic6.src})` }}
      >
        <div className="flex flex-col gap-6 max-w-xl">
          <h1 className="!m-0 !text-5xl lg:!text-7xl text-black font-bold pb-4 !leading-normal">
            Lorem ipsum dolor sit.
          </h1>
          <p className="!m-0 text-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat,
            dolores! Ut soluta autem, obcaecati accusamus officia ad voluptates,
            distinctio enim perspiciatis aspernatur veniam dicta.
          </p>
          <button className="btn btn-lg bg-green-600 border-green-600 max-w-48 text-white uppercase mt-6">
            View all
          </button>
        </div>
      </section>

      <section className="w-full lg:min-h-screen flex flex-col bg-themegreen items-center justify-center pt-8 lg:pt-28">
        <h1 className="!m-0 !text-5xl lg:!text-7xl text-white font-semibold pb-4 px-4 text-center lg:text-left">Lorem ipsum dolor sit amet.</h1>
        <div className="container px-2 lg:px-20">
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={18}
            slidesPerView={3.2}
            pagination={{ clickable: true, bulletActiveClass: "customActiveBullet", bulletClass:"customBullet"  }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="mt-8 lg:mt-20 mb-12 lg:mb-20 rounded-lg border border-black overflow-hidden ">
                <img src={pic7.src} alt="pic7" className="w-full"/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-8 lg:mt-20 mb-12 lg:mb-20 rounded-lg border border-black overflow-hidden">
                <img src={pic8.src} alt="pic8" className="w-full"/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-8 lg:mt-20 mb-12 lg:mb-20 rounded-lg border border-black overflow-hidden">
                <img src={pic9.src} alt="pic9" className="w-full"/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-8 lg:mt-20 mb-12 lg:mb-20 rounded-lg border border-black overflow-hidden">
                <img src={pic10.src} alt="pic10" className="w-full"/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-8 lg:mt-20 mb-12 lg:mb-20 rounded-lg border border-black overflow-hidden">
                <img src={pic7.src} alt="pic7" className="w-full"/>
              </div>
            </SwiperSlide>
         
          </Swiper>
        </div>
        <button className="btn btn-lg btn-wide bg-white text-black uppercase mt-12 mb-24">view all</button>
      </section>

      <footer className="bg-base-200 grid-cols-3 hidden lg:grid items-center justify-center justify-items-center p-8">
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam esse
          illo eveniet quisquam dolorem.
        </p>

        <img src={logo.src} alt="logo" className="h-24" />

        <p className="font-bold max-w-60 justify-self-end">
          All rights reserved to Lorem, ipsum.© 2022
        </p>
      </footer>

      <footer className="bg-base-200 grid-cols-1 grid lg:hidden w-full justify-items-center pt-8">
        <img src={logo.src} alt="logo" className="h-28" />

        <p className="font-bold text-center max-w-xs !mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam esse
          illo eveniet quisquam dolorem. Tempora, perspiciatis.
        </p>
        <div className="divider w-60"></div>
        <p className="font-bold">All rights reserved to Lorem, ipsum.© 2022</p>
      </footer>
    </main>
  );
}
