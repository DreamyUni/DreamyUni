"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -500]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.3], [1, 0]), springConfig);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0.6]), springConfig);
  const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [0, 10]), springConfig);

  return (
    <div ref={ref} className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto">
      <motion.div
        style={{
          translateY,
          opacity,
          scale,
          rotateZ: rotate,
        }}
        className="sticky top-0 flex flex-col items-center"
      >
        <motion.h1 
          className="text-4xl md:text-7xl font-bold text-center mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Unlock Your Dream University
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-center mb-12 max-w-2xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Explore opportunities, boost your extracurriculars, and map your path to success.
        </motion.p>
        <motion.div 
          className="relative w-full max-w-5xl aspect-[16/10]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Image
            src="/images/jetson.jpg"
            alt="DreamyUni Platform"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    (<div
      className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        The Ultimate <br /> development studio
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>)
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0 cursor-pointer"
    >
      <Link href={product.link} passHref legacyBehavior>
        <a className="block group-hover/product:shadow-2xl">
          <Image
            src={product.thumbnail}
            height="600"
            width="600"
            className="object-cover object-left-top absolute h-full w-full inset-0"
            alt={product.title}
          />
          <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none transition-opacity duration-300"></div>
          <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white transform translate-y-4 group-hover/product:translate-y-0 transition-all duration-300">
            {product.title}
          </h2>
        </a>
      </Link>
    </motion.div>
  );
};