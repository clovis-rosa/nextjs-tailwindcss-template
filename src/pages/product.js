import Layout from "../templates/layout";
import { stagger, fadeInUp } from "../components/Animations";
import { motion } from "framer-motion";

export default function Product() {
  return (
    <Layout>
      <motion.section
        variants={stagger}
        className="md:container md:mx-auto px-4"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 dark:text-white mt-10 mb-8 sm:mt-14 sm:mb-10"
        >
          Product
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-xl leading-relaxed post-container dark:text-white mt-8 mb-8 text-gray-900"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio delectus
          doloribus voluptatibus pariatur culpa quod eum laudantium, dolorem
          aliquid asperiores veniam corporis repudiandae sequi quo ipsam
          quibusdam illum, quasi eveniet!
        </motion.p>
        <motion.p
          variants={fadeInUp}
          className="text-xl leading-relaxed post-container dark:text-white mt-8 mb-8 text-gray-900"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, distinctio, deserunt accusamus illo culpa laborum
          facere natus iste autem libero excepturi dicta consequatur sunt
          voluptates harum modi! Voluptates, incidunt fuga.
        </motion.p>
        <motion.p
          variants={fadeInUp}
          className="text-xl leading-relaxed post-container dark:text-white mt-8 mb-8 text-gray-900"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsum
          eos corrupti asperiores maxime sapiente, qui commodi sunt consectetur
          fugit, molestiae blanditiis eaque sed, cupiditate excepturi
          perferendis illo. Ratione, eum?
        </motion.p>
        <motion.p
          variants={fadeInUp}
          className="text-xl leading-relaxed post-container dark:text-white mt-8 mb-8 text-gray-900"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta saepe
          laborum assumenda qui. Dolore aliquid exercitationem dolores
          perspiciatis veniam, nesciunt ad expedita odio amet reiciendis
          deserunt tempore earum, vel nemo?
        </motion.p>
      </motion.section>
    </Layout>
  );
}
