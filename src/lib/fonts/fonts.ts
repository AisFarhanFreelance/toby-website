import { Libre_Baskerville } from "next/font/google";
import localFont from "next/font/local";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre-baskerville",
});

const mourich = localFont({
  src: [
    {
      path: "../../../public/assets/fonts/mourich/Mourich.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-mourich",
  display: "swap",
});

const rocaOne = localFont({
  src: [
    {
      path: "../../../public/assets/fonts/roca-font/RocaOne-Rg.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-roca-one",
  display: "swap",
});

const theYoungest = localFont({
  src: [
    {
      path: "../../../public/assets/fonts/the-youngest/TheYoungest.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-the-youngest",
  display: "swap",
});

export { libreBaskerville, mourich, rocaOne, theYoungest };
