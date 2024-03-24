import background from "../../public/img/Prb_Header.png";
import Navbar from "./Navbar";
import Counter from "./counter";

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

      <div className="hero min-h-[85vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-lg w-[600px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-8xl font-bold not-prose">Lorem ipsum dolor sit amet.</h1>
            <p className="py-6 max-w-7xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              iusto porro saepe debitis cum, consectetur voluptatibus magni
              atque voluptas corrupti ab nemo sunt labore blanditiis accusamus
              fugit quisquam nulla iure rem placeat velit repudiandae dolor
              sequi commodi? Minima illum, sunt omnis ipsam expedita reiciendis?
              Error veniam dolor quae molestias! Sunt rerum nisi dolore dolores,
              soluta dicta consectetur modi illum magni eaque asperiores, minus
              reiciendis id, culpa provident eius. Sunt necessitatibus enim
              debitis repellendus aliquam quis, nulla ut blanditiis delectus,
              error perspiciatis corporis nostrum tenetur, quae incidunt a
              itaque optio deleniti maxime illo quos numquam! Voluptates, totam
              tempore! Reiciendis, pariatur provident.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  );
}
