import Layout from "../templates/layout";
import { PageSeo } from "../components/SEO";
import siteMetadata from "../data/siteMetadata.json";

export default function Features() {
  return (
    <Layout>
      <PageSeo
        title={`Features | ${siteMetadata.title}`}
        description={`Features me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/features`}
      />
      <section>
        <h1>Features</h1>
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
