import { useState } from "react";
import CountUp from "react-countup";
import { aboutData } from "../../components/data";
import { fadeIn } from "../../components/variants";
import { motion } from 'framer-motion';

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <section className="padding-container max-container flex flex-col gap-8 py-8 lg:flex-row lg:py-28 xl:gap-32">
      {/* left */}
      <motion.div
        variants={fadeIn('left', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="flex flex-1 flex-col flexCenter lg:justify-start"
      >
        <h3 className="h3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Desarrollador <span className="text-secondary">Web Full Stack</span> y Diseñador UI/UX.</h3>
        <p className="text-center lg:text-start hidden sm:block">Más de una década de experiencia en desarrollo web y diseño de interfaces. Comprometido con la innovación y la excelencia en cada proyecto.</p>
        {/* counter */}
        <div>
          <div className="hidden lg:flex flex-1 mt-8 gap-2">
            <div className="relative flex-1 px-4 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <h4 className="text-secondary font-extrabold text-xl sm:text-2xl">
                <CountUp start={66} end={80} duration={5} delay={1} />+
              </h4>
              <p className="uppercase text-[13px] font-bold leading-4 pt-2">Clientes satisfechos</p>
            </div>
            <div className="relative flex-1 px-4 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <h4 className="text-secondary font-extrabold text-xl sm:text-2xl">
                <CountUp start={10} end={38} duration={5} delay={1} />+
              </h4>
              <p className="uppercase text-[13px] font-bold leading-4 pt-2">Proyectos implementados</p>
            </div>
            <div className="relative flex-1 px-4 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <h4 className="text-secondary font-extrabold text-xl sm:text-2xl">
                <CountUp start={2} end={12} duration={5} delay={1} />+
              </h4>
              <p className="uppercase text-[13px] font-bold leading-4 pt-2">Años de experiencia</p>
            </div>
          </div>
        </div>
      </motion.div>
      {/* right */}
      <motion.div
        variants={fadeIn('right', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="flex flex-col w-full xl:max-w-[47%] h-[488px]"
      >
        {/* Skills */}
        <div className="mb-4 lg:mb-16 flex flex-col gap-3 mx-auto min-w-[90%] xl:ml-0">
          <div>
            <div className="flexBetween text-sm text-gray-20">
              <span>HTML, CSS, React.js, Angular, Svelte</span>
              <span>97%</span>
            </div>
            <div className="relative bg-tertiary h-3 w-full rounded-full">
              <span className="absolute top-0 left-0 h-full w-[97%] bg-blue-500 rounded-full"></span>
            </div>
          </div>
          <div>
            <div className="flexBetween text-sm text-gray-20">
              <span>Kotlin, C#, JavaScript, TypeScript</span>
              <span>95%</span>
            </div>
            <div className="relative bg-tertiary h-3 w-full rounded-full">
              <span className="absolute top-0 left-0 h-full w-[95%] bg-purple-500 rounded-full"></span>
            </div>
          </div>
          <div>
            <div className="flexBetween text-sm text-gray-20">
              <span>Express.js, ASP.NET MVC, Next.js, Cosmic JS, Electron</span>
              <span>83%</span>
            </div>
            <div className="relative bg-tertiary h-3 w-full rounded-full">
              <span className="absolute top-0 left-0 h-full w-[83%] bg-yellow-500 rounded-full"></span>
            </div>
          </div>
        </div>

        {/* tabs */}
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mt-8 sm:mt-0">
          {
            aboutData.map((item, itemIndex) => (
              <div key={itemIndex}
                className={`${index === itemIndex && ' after:w-[100%] after:!bg-secondary after:transition-all after:duration-300'} capitalize medium-16 relative after:absolute after:h-[2px] after:w-9 after:bg-white after:left-0 after:-bottom-1 cursor-pointer`}
                onClick={() => setIndex(itemIndex)}>{item.title}</div>
            ))
          }
        </div>
        {/* Tabs data */}
        <div className="py-6 xl:py-8 flex flex-col gap-2 items-center xl:items-start">
          {
            aboutData[index].info.map((item, itemIndex) => (
              <div key={itemIndex} className="flex flex-1 flex-col md:flex-row gap-x-3 items-center text-white/60">
                {/* title */}
                <div className="text-sm sm:text-base md:text-lg lg:text-xl">{item.title}</div>
                <div className="hidden lg:flex">-</div>
                <div className="text-sm sm:text-base md:text-lg lg:text-xl">{item.value}</div>
                <div className="text-sm sm:text-base md:text-lg lg:text-xl">{item.year}</div>
                {/* icons */}
                <div className="flex gap-x-2">
                  {item.icons?.map((icon, itemIndex) => (
                    <div key={itemIndex} className="text-sm sm:text-base md:text-lg lg:text-xl">{icon}</div>
                  ))}
                </div>
              </div>
            ))
          }
        </div>
      </motion.div>
    </section>
  )
};

export default About;
