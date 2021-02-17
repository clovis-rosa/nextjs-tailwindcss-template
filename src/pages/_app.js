import { ThemeProvider } from "next-themes";
import { AnimateSharedLayout } from "framer-motion";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <AnimateSharedLayout exitBeforeEnter>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </ThemeProvider>
  );
}

export default MyApp;
