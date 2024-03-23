import Image from "next/image";
import background from "../../public/img/Prb_Header.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: `url(${background.src})`,
        }}
      >
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content flex-col lg:flex-row">
          <div className="flex-1 w-[400px] hidden sm:flex"></div>
          <div className="flex flex-col gap-16">
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
    </main>
  );
}
