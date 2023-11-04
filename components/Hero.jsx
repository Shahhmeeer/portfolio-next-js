import Image from "next/image";
import profile from "../public/hero-image.svg";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row" style={{ minHeight: "60vh" }}>
      <div className=" px-6 flex-1 flex flex-col items-center justify-end md:justify-center">
        <div className="flex items-center flex-col md:block">
          <h3 className="md:text-lg">Hello, I&apos;m a</h3>
          <h1 className="md:text-4xl text-xl md:mb-4 font-bold">Junior Software Engineer</h1>
          <p className="text-xs md:text-sm">Web development and Salesforce sorcerer in one.</p>
        </div>
      </div>
      <div className="flex-1 flex md:items-center justify-center">
        <Image src={profile} alt="Shahmeer Asim Image" className="max-w-xs md:max-w-sm lg:max-w-2xl" />
      </div>
    </section>
  );
}
