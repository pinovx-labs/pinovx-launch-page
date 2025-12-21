// app/not-found.tsx

"use client"
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <>
      {/* If you have a layout with navbar/footer, they'll be included automatically */}
      <section className="page_404 pt-20 pb-40 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            {/* 404 Image/Animation */}
            <div className="four_zero_four_bg w-full max-w-3xl h-[400px] relative">
              {/* Using Next.js Image component */}
              <Image
                src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                alt="404 animation"
                fill
                className="object-contain object-center"
                unoptimized // For external GIFs
              />
              <h1 className="absolute bottom-0 left-0 right-0 text-8xl md:text-9xl font-bold text-black opacity-20">
                404
              </h1>
            </div>

            {/* Content */}
            <div className="content_box_404 max-w-2xl -mt-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Looks like you&apos;re lost
              </h2>
              
              <p className="text-gray-600 text-lg mb-8">
                The page you are looking for is not available! Please check the URL.
              </p>

              {/* Custom error message support */}
              {/* {error && (
                <p className="text-red-600 mb-6">{error}</p>
              )} */}

              <Link
                href="/"
                className="link_404 inline-block bg-[#02CE13] hover:bg-[#01680A] text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Go to Home
              </Link>

              {/* Optional: Back button */}
              <div className="mt-6">
                <button
                  onClick={() => window.history.back()}
                  className="text-gray-600 hover:text-gray-800 underline transition-colors"
                >
                  ← Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer will be included from layout if you have one */}
    </>
  );
}