import SiteLayout from "../templates/SiteLayout";

export default function Blog() {
  return (
    <SiteLayout>
      <section className="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
        <div className="text-center max-w-screen-lg xl:max-w-screen-xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 dark:text-white mt-10 mb-8 sm:mt-14 sm:mb-10">
            Rapidly build modern websites without ever leaving your HTML.
          </h1>

          <p className="text-xl leading-relaxed post-container dark:text-white mt-8 mb-8 text-gray-900">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
            deleniti, quas laudantium itaque aliquam nemo nulla veniam tempora
            sapiente doloremque voluptas reprehenderit consequuntur. Repellat
            est ad accusantium quasi sunt quibusdam?
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
