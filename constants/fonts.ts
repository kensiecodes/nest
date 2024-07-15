import {
  Inter,
  Playfair_Display,
  Lato,
  Libre_Barcode_128_Text,
} from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"], variable: "--font_inter" });

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair_display",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

const jacquard24 = localFont({
  src: "../public/fonts/Jacquard_24/Jacquard24-Regular.ttf",
  variable: "--font-jacquard24",
});

const karla = localFont({
  src: [
    {
      path: "../public/fonts/Karla/Karla-VariableFont_wght.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Karla/Karla-Italic-VariableFont_wght.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-karla",
});

const barcode = Libre_Barcode_128_Text({
  weight: "400",
  style: "normal",
  variable: "--font-barcode",
});

export const fontvariables = `${inter.variable} ${playfairDisplay.variable} ${lato.variable} ${jacquard24.variable} ${karla.variable} ${barcode.variable}`;
