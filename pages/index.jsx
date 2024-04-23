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
        <p className="py-2 mb-4">
        Ingeniero de Desarrollo de Software con más de nueve años de experiencia en Tecnología de la Información. Mi pasión por la tecnología ha guiado mi carrera desde la secundaria. He trabajado en proyectos de diferentes escalas, desarrollando habilidades diversas y construyendo una sólida red de contactos como Desarrollador Full Stack. </p>
    
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