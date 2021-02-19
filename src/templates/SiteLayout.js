import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
// import { motion } from "framer-motion";
// import siteMetadata from "../data/siteMetadata.json";
// // import { animate } from "../components/Animations";

export default function SiteLayout({ children }) {
  const router = useRouter();

  const meta = {
    title: "Next.js TailwindCSS Template Starter",
    author: "Clovis Rosa",
    headerTitle: "TailwindCSS Site",
    description: "A site created with Next.js and Tailwind.css",
    language: "en-us",
    siteUrl: "https://clovisrosa.vercel.app",
    siteRepo: "https://github.com/clovis-rosa/nextjs-tailwindcss-template",
    image: "/assets/images/avatar.png",
    socialBanner: "/assets/images/twitter-card.png",
    email: "address@yoursite.com",
    github: "https://github.com",
    twitter: "https://twitter.com/Twitter",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    linkedin: "https://www.linkedin.com",
    image: "https://clovisrosa.vercel.app/assets/images/banner.png",
    type: "website",
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name={`${meta.description}`} />
        <meta property="og:url" content={`${meta.siteUrl}${router.asPath}`} />
        <link rel="canonical" href={`${meta.siteUrl}${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.author} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@rosa-clovis" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Header />
      <main className="container m-auto">{children}</main>
    </>
  );
}
