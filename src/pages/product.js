import React from "react";
import Layout from "../templates/layout";
import { PageSeo } from "../components/SEO";
import siteMetadata from "../data/siteMetadata.json";
import { stagger, fadeInUp } from "../components/Animations";
import { motion } from "framer-motion";

export default function Product() {
  return (
    <Layout>
      <PageSeo
        title={`Products | ${siteMetadata.title}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/product`}
      />
      <motion.section variants={stagger}>
        <motion.h1 variants={fadeInUp}>Product</motion.h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio delectus
          doloribus voluptatibus pariatur culpa quod eum laudantium, dolorem
          aliquid asperiores veniam corporis repudiandae sequi quo ipsam
          quibusdam illum, quasi eveniet!
        </p>
      </motion.section>
    </Layout>
  );
}
