import localFont from "next/font/local";
// import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
// import WhatsAppButton from "./components/WhatsAppButton";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Rajguru Steel Industry",
//   description:
//     "Discover Rajgurue Steel Industry, your premier source for high-quality stainless steel products, decorative sheet solutions, and elegant glass railings. Specializing in stainless steel innovations, we offer durable and stylish options for windows and glass railing, ensuring both functionality and aesthetic appeal. Elevate your space with our expertly crafted stainless steel and aluminum solutions today!",
//   name: "viewport",
//   content: "width=device-width, initial-scale=1",
//   property:"og:type",
//   content:"website",
//   property:"og:url",
//   content:"https://rajgurusteel.vercel.app/",
//   keywords:["glass railing","glass railing designs","Sustainability","balcony with glass railing","glass railing for stairs","glass railing design for balcony in india","modern balcony glass railing","mumbai stainless steel industries","stainless steel industries", "stainless steel decorative sheet", "aluminum", "profile", "steel industry", "mumbai", "maharashtra", "ss T profile", "ss U profile", "ss fluted panel", "invisible gril", "queue manager", "ss wire rope", "stainless steel accessoris", "balsustrade railing", "stainless steel baslustrade railing", "glass railing", "balcony railing", "windows" ,"balcony railing", "terrace railing", "durable glass", "customized profile", "customized railing", "stainless steel railing"]
// };

// Dynamically import the Navbar component
// const Navbar = dynamic(() => import("./components/navbar"), { ssr: false });

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
        {/* <WhatsAppButton /> */}
        <Footer />
      </body>
    </html>
  );
}
