import {
  diffFlash,
  diffGlobal,
  diffLock,
  diffMoney,
} from "@/utils/externalMedia";

export const different = [
  {
    id: 0,
    heading: "Settlement, Not Speculation",
    imgSrc: diffFlash,
    text: "We’re built for predictable execution and value settlement ,not trading activity or price chasing.",
    bgColor: "#19451D",
  },
  {
    id: 1,
    heading: "Single Access, All Digital Value",
    imgSrc: diffGlobal,
    text: "Buy, sell, and move value across rails with clarified expectations. No Surprises.",
    bgColor: "#02C112",
  },
  {
    id: 2,
    heading: "Non-custodial Design",
    imgSrc: diffMoney,
    text: "Digital assets are delivered directly to your own wallet. You keep ownership.",
    bgColor:
      "linear-gradient(to_bottom,#02CE13_0%,#02CE13_20%,#019B10_60%,#01680A_100%)",
  },
  {
    id: 3,
    heading: " Secure & Compliant",
    imgSrc: diffLock,
    text: "The PinovX model preserves user control from start to finish.",
    bgColor: "#19451D",
  },
];
