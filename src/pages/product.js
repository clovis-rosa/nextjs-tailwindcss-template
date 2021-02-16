import React from "react";
import Layout from "../templates/layout";
import { PageSeo } from "../components/SEO";
import siteMetadata from "../data/siteMetadata.json";

export default function Product() {
  return (
    <Layout>
      <PageSeo
        title={`Products | ${siteMetadata.title}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/product`}
      />
      <section>
        <h1>Product</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio delectus
          doloribus voluptatibus pariatur culpa quod eum laudantium, dolorem
          aliquid asperiores veniam corporis repudiandae sequi quo ipsam
          quibusdam illum, quasi eveniet!
        </p>
      </section>
    </Layout>
  );
}
