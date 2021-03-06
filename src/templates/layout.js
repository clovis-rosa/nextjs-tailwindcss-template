import SEO from "../components/SEO";
import Header from "../components/Header";
import { motion } from "framer-motion";
// import { animate } from "../components/Animations";

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <Header />
      <motion.main
        className="container m-auto"
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
      >
        {children}
      </motion.main>
    </>
  );
}
