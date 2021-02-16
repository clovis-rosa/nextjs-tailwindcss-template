import Head from "next/head";
import Header from "../components/Header";
import siteMetadata from "../data/siteMetadata";

export default function Layout({ title, children }) {
  return (
    <>
      <Header />
      <main className="container m-auto">{children}</main>
    </>
  );
}
