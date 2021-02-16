import Layout from "../templates/layout";
import { PageSeo } from "../components/SEO";
import siteMetadata from "../data/siteMetadata.json";
import Link from "next/link";
import { motion } from "framer-motion";
import { stagger, fadeInUp } from "../components/Animations";

export default function Home() {
  return (
    <Layout>
      <PageSeo
        title={`Home | ${siteMetadata.title}`}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />

      <motion.section
        variants={stagger}
        className="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44"
      >
        <motion.div
          variants={fadeInUp}
          className="text-center max-w-screen-lg xl:max-w-screen-xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
            Rapidly build modern websites without ever leaving your HTML.
          </h1>
          <Link href="/">
            <motion.a
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
            >
              Get started
            </motion.a>
          </Link>
          <motion.p
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl leading-relaxed post-container dark:text-white mt-8 mb-8 text-gray-900"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
            deleniti, quas laudantium itaque aliquam nemo nulla veniam tempora
            sapiente doloremque voluptas reprehenderit consequuntur. Repellat
            est ad accusantium quasi sunt quibusdam?
          </motion.p>
        </motion.div>
      </motion.section>
    </Layout>
  );
}
