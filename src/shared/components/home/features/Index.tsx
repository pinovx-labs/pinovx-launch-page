import React from 'react'
import ComponentTitle from "../ComponentTitle"
import ComponentHeading from "../ComponentHeading"
import { SecondRow } from "./SecondRow"
import { FirstRow } from "./FirstRow"

const Feature = () => {
  return (

    <main className="w-full mt-10   border border-yellow-500">
      <section className="container  mx-auto  px-4 ">
        <div className="flex flex-col gap-8  items-center justify-center ">
          <ComponentTitle text="Features" />
          <ComponentHeading text="Built to Move Money Smarter, Across Borders."  className="max-w-[851px] text-center " />
        </div>

        <div className="flex flex-col gap-5 my-4   border border-red-500">
          <FirstRow />

          <SecondRow />
        </div>
      </section>
    </main>  )
}

export default Feature