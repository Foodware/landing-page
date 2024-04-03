import heroImg from "./images/hero img.png";

export default function Hero() {
  return (
    <>
      <section className="hero min-h-[50vh] bg-black flex flex-col items-center py-4 text-2xl ">
        <div className="text font-bold text-white w-[33ch] text-center">
          Experience the Future of Food Distribution with{" "}
          <span className="text-[var(--blue)]">FOODWARE</span>
        </div>
        <div className="img flex justify-center items-center">
          <img src={heroImg} alt="" className="w-[50%]" />
        </div>
      </section>
    </>
  );
}
