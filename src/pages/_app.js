import { AnimateSharedLayout } from "framer-motion";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout exitBeforeEnter>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
}

export default MyApp;
