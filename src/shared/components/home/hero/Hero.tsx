import Image from "next/image";
import Button from "../../button/Button";

export default function HeroSection() {
  return (
    <main className="w-full  bg-white  border border-yellow-500  mt-14 ">
      <section className="relative w-full border border-red-500">
        {/* White space above for content that shoots out */}

        {/* Gradient Background */}
        <div
          className="w-full bg-no-repeat     bg-center bg-contain relative min-h-[800px] md:min-h-[900px]"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/danxk4ua5/image/upload/v1766219556/background_k6xrx7.svg)",
          }}
        >
          <div className="bg-white  flex flex-col  items-center justify-center ">
            {/* Content container that will overlap both white and gradient */}
            <div className="absolute z-10 flex flex-col items-center justify-center mt-[450px] ">
              {/* TEXT + INPUT */}
              <div className="flex flex-col gap-6 text-center items-center  ">
                <p className="font-geist font-medium text-4xl md:text-[58px] md:leading-[70px] leading-tight max-w-[871px] text-black">
                  A Smarter Way to Move{" "}
                  <span className="font-extrabold">Money & Crypto</span>
                </p>
                <p className="font-inter font-medium text-lg md:text-xl md:leading-[30px] leading-relaxed max-w-[719px] text-black/80">
                  Send money, buy crypto, and convert assets seamlessly in one
                  secure app. Launching soon, be the first to know when PinovX
                  goes live.
                </p>
                <div className="flex flex-col md:flex-row gap-5 mt-2 items-center w-full max-w-[680px]">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full md:w-[380px] rounded-lg border border-gray-200 p-4 bg-white/95 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <Button text="Join Our Waitlist" type="button" />
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE (BOTTOM, MERGED WITH GRADIENT) */}
          <div className="absolute inset-x-0 bottom-0 flex justify-center">
            <Image
              src="https://res.cloudinary.com/danxk4ua5/image/upload/v1766219585/iPhone_12_Pro_Wooden_Hands_jn3yac.svg"
              alt="Hero device"
              width={800}
              height={800}
              priority
              className="max-w-[90%] md:max-w-none"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
