"use client";
import Image from "next/image";
import Button from "../../button/Button";
import { motion } from "framer-motion";
import { fadeInScale, fadeInUp, staggerContainer } from "@/utils/animation";
import { sponsors } from "../../../../../public/assets/data/sponsors";
import WaitlistForm from "./WaitlistForm";

export default function HeroSection() {
  return (
    <main className="w-full  bg-[#19451D]   mt-14 ">
      <section className=" w-full " id="home">
        {/* White space above for content that shoots out */}

        {/* Gradient Background */}
        <div
          className="w-full bg-no-repeat     bg-center bg-contain  min-h-[750px] md:min-h-[900px]"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/danxk4ua5/image/upload/v1767052953/background_1_if2srs.svg)",
          }}
        >
          {/* fade-in background container */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="bg-white  flex flex-col  items-center justify-center "
          >
            {/* Content container that will overlap both white and gradient */}
            <motion.div
              variants={fadeInUp}
              className="absolute z-10 flex flex-col items-center justify-center mt-[450px] "
            >
              {/* TEXT + INPUT */}
              <div className="flex flex-col gap-6 text-center items-center mt-2 md:mt-0  ">
                <motion.p
                  variants={fadeInUp}
                  className="font-geist font-medium px-2 md:px-0 text-4xl md:text-[58px] md:leading-[70px] leading-tight max-w-[871px] text-white"
                >
                  A Smarter Way to Move{" "}
                  <span className="font-extrabold">Money & Crypto</span>
                </motion.p>

                <motion.p
                  variants={fadeInUp}
                  className="font-inter  px-2 md:px-0 font-medium text-lg md:text-xl md:leading-[30px] leading-relaxed max-w-[719px] text-white/80"
                >
                  Send money, buy crypto, and convert assets seamlessly in one
                  secure app. Launching soon, be the first to know when PinovX
                  goes live.
                </motion.p>

                <WaitlistForm />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <div className="flex justify-center items-center flex-wrap bg-[#F8F8F8] flex-col gap-6 py-10 ">
        <motion.p
          className="font-montserrat md-font-bold font-semibold text-[16px] text-center text-black "
          variants={fadeInUp}
        >
          POWERED BY
        </motion.p>
        <motion.div
          className="flex  gap-5 flex-wrap py-3 items-center justify-center "
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {sponsors.map((img, i) => (
            <Image
              src={img.img}
              key={i}
              alt="sponsors"
              width={img.width}
              height={img.height}
            />
          ))}
        </motion.div>
      </div>
    </main>
  );
}
