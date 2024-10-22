import Image from "next/image";
import Link from "next/link";
import Img404 from "./assets/404page.webp";
export default function page() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center justify-center h-full max-w-6xl w-full gap-4">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image
            src={Img404}
            alt="404 Image"
            className="object-cover h-auto w-auto"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left md:pl-8">
          <h1 className="text-2xl text-secondary din-semibold mb-2">Uh oh..</h1>
          <h2 className="text-4xl din-bold mb-4 text-primary">
            Something went wrong
          </h2>
          <p className="text-secondary nunito mb-8">
            Looks like this page doesn't exist or was removed.
          </p>
          <Link href="/" passHref>
            <button className="relative inline-flex items-center justify-center overflow-hidden px-6 py-3 mb-6 text-white border border-[#335c98] rounded-md din-regular text-sm font-normal uppercase transition-all duration-700 cursor-pointer group z-10">
              <span className="absolute inset-0 bg-[#335c98] transition-all duration-700 ease-in-out group-hover:bg-transparent"></span>
              <span className="absolute inset-0 bg-transparent transition-all duration-700 ease-in-out">
                <span className="absolute top-0 left-0 w-full h-full bg-[#335c98] origin-top-left transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                <span className="absolute bottom-0 right-0 w-full h-full bg-[#335c98] origin-bottom-right transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
              </span>
              <span className="relative z-10 group-hover:text-primary transition-colors duration-700 ease-in-out din-semibold">
                Back to Home
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
