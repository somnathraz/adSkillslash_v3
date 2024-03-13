// import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { Montserrat } from "next/font/google";
import "../styles/form.css";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={montserrat.className}>
        <Component {...pageProps} />
        <GoogleTagManager gtmId="GTM-NJMQTJF" />
      </main>
    </>
  );
}

export default MyApp;
