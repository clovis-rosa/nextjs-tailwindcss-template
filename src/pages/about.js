import Layout from "../templates/layout";
import { PageSeo } from "../components/SEO";
import siteMetadata from "../data/siteMetadata.json";

export default function About() {
  return (
    <Layout>
      <PageSeo
        title={`About | ${siteMetadata.title}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <section>
        <h1>About</h1>
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
