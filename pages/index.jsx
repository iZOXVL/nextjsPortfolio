import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter"
import SocialIcons from "../components/SocialIcons";
import { fadeIn } from "../components/variants";

const motionLink = motion(Link);

const Home = () => {
  return (
    
    <section className="padding-container max-container page flex flex-col gap-4 flexCenter pb-32 py-4 lg:flex-row lg:gap-32">
      {/* Left */}
      <motion.div
        variants={fadeIn('down', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="flex-1 flexCenter flex-col lg:items-start"
      >
        <h5 className="h3">Hola, soy <span className="text-secondary font-extrabold">Armando VL</span></h5>
        <h4 className="bold-24">Un
          <span className="pl-2">
            <Typewriter
              words={['Desarrolador full stack', 'Programador', 'Maestro', 'Alumno']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={90}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </span>
        </h4>
        <p className="py-2">
        Soy un experimentado Ingeniero de Desarrollo de Software con más de nueve años de experiencia en el campo de la Tecnología de la Información. Desde mis días de secundaria, he estado profundamente inmerso en la tecnología, fomentando una pasión que ha guiado mi trayectoria profesional. Mi amplia experiencia abarca proyectos pequeños, medianos y de gran escala, lo que me ha permitido cultivar un conjunto de diversas habilidades y una sólida red de contactos que me consideran un hábil Desarrollador Full Stack.
         </p>
        {/* social icons */}
        <SocialIcons />
      </motion.div>
      {/* Right */}
      <motion.div
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="flex flex-1 relative"
      >
        <Image src={'/hero-2.png'} alt="heroImg" width={400} height={400} className="w-[277px] h-auto lg:w-full relative pt-10" />

      </motion.div>
    </section>
  )
};

export default Home;