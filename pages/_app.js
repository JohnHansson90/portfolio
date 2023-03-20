import Script from "next/script";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://cdn.tailwindcss.com"></Script>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;

// RENDERS OUR COMPONENTS
