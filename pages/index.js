import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
        <div className="text-center relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
            Hello World with tailwindcss!
          </h1>
          <Link href="/">
            <a className="w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200">
              Get started
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}
