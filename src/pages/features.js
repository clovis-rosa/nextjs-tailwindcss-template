import Layout from "../templates/layout";
import { stagger, fadeInUp } from "../components/Animations";
import { motion } from "framer-motion";

export default function Features() {
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
          Features
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-xl leading-relaxed post-container dark:text-white mt-8 mb-8 text-gray-900"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          optio magnam non, cupiditate illum at voluptatem repellendus ad, vitae
          fuga obcaecati, alias aliquid inventore possimus iste! Sapiente sint
          enim pariatur quam facilis perspiciatis saepe. Sapiente beatae culpa
          similique nihil expedita sed dicta facilis, consectetur delectus quia
          vitae ullam fugiat dolorem quod id, ducimus deserunt blanditiis
          repellat magnam animi qui temporibus harum voluptatibus! Hic,
          doloremque? Nihil repudiandae facere voluptas ipsum, veniam corrupti
          sapiente iure similique maiores enim ratione inventore! Cum
          praesentium sit aperiam consectetur illo culpa repellat? Dolore ex
          quam delectus, distinctio sint quidem accusantium, possimus culpa
          animi non ad fugiat praesentium perferendis quo. Esse accusantium rem
          eaque possimus consectetur amet velit perspiciatis assumenda soluta, a
          inventore enim, repellat veritatis eveniet neque? Rem cumque ipsa sint
          fugit magnam atque nulla aliquam amet repellat omnis voluptates eius
          doloremque, soluta, libero reiciendis possimus et blanditiis animi at!
          Deserunt quo libero, itaque, excepturi, id nobis dolorem labore hic
          magnam amet consectetur delectus asperiores. Illo, obcaecati quos,
          tempora maxime sint nobis necessitatibus non quae eligendi tempore
          provident dolor incidunt rerum aspernatur adipisci ab. Ex, beatae rem
          provident quia eveniet soluta nulla earum a? Ipsa esse quaerat,
          necessitatibus cupiditate in dignissimos corporis sed ullam provident
          consequuntur. Ducimus quis, autem minima ipsam saepe sequi
          consequuntur ullam neque aliquam magni libero vel! Distinctio
          aspernatur odit necessitatibus animi recusandae impedit nihil amet,
          voluptatum, earum voluptas iusto porro hic quis doloremque! Animi
          nostrum dicta laborum possimus.
        </motion.p>
        <motion.p
          variants={fadeInUp}
          className="text-xl leading-relaxed post-container dark:text-white mt-8 mb-8 text-gray-900"
        >
          Esse, minus nostrum numquam earum minima cumque deserunt, veritatis
          est, harum facere optio quaerat ducimus explicabo distinctio! Eos
          obcaecati autem officiis architecto! Nulla, cum vero officia adipisci,
          veniam voluptas iure vel dolorum, provident voluptate porro! Quidem
          delectus quo tenetur est ipsam ex dolores nobis sed reprehenderit sunt
          modi iste temporibus cupiditate ad, aliquam quia qui velit quod
          reiciendis voluptatibus autem eos! Voluptas eligendi eum tempora
          blanditiis libero, aperiam enim sit, quis, sed neque maxime
          reiciendis. Dolore amet temporibus facere perspiciatis et, ratione
          debitis cupiditate id fuga, similique nemo beatae atque rem voluptates
          consectetur quasi aut ipsa enim voluptate deleniti? Excepturi
          reiciendis cupiditate, ducimus fugiat voluptates amet autem facere
          optio atque aliquid, molestiae quia, temporibus doloribus? Expedita
          maiores soluta beatae exercitationem officiis veritatis facilis!
          Officia delectus reprehenderit facilis labore nobis illum tenetur at,
          ex commodi nemo. Minima iusto impedit accusamus doloremque! Amet
          earum, provident animi obcaecati quis numquam eum asperiores fugiat
          cumque laudantium ratione, tempore omnis non magni, corrupti
          laboriosam possimus temporibus necessitatibus enim? Accusamus? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
          distinctio, deserunt accusamus illo culpa laborum facere natus iste
          autem libero excepturi dicta consequatur sunt voluptates harum modi!
          Voluptates, incidunt fuga.
        </motion.p>
      </motion.section>
    </Layout>
  );
}
