
"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const isMobile = useIsMobile();
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  // Mobile Layout with Carousel
  if (isMobile) {
    return (
      <div
        ref={ref}
        className="h-[150vh] py-20 overflow-hidden antialiased relative flex flex-col"
      >
        <Header />
        <div className="px-4 max-w-full mx-auto">
          {/* Carousel for all images */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-xs mx-auto"
          >
            <CarouselContent>
              {products.map((product, index) => (
                <CarouselItem key={index}>
                  <div className="p-2">
                    <div 
                      className="relative rounded-lg overflow-hidden group bg-gray-100"
                      style={{ aspectRatio: '525/350' }}
                    >
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <h3 className="text-white font-bold text-base leading-tight">{product.title}</h3>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
          
          {/* Carousel indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {products.slice(0, 5).map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-400"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Desktop Layout with fixed 525x350 aspect ratio
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`max-w-7xl relative mx-auto ${isMobile ? 'py-10 px-4' : 'py-20 md:py-40 px-4'} w-full left-0 top-0`}>
      <h1 className={`${isMobile ? 'text-3xl' : 'text-2xl md:text-7xl'} font-bold text-white`}>
        Lojas Virtuais de <br /> Alto Desempenho
      </h1>
      <p className={`max-w-2xl ${isMobile ? 'text-base mt-4' : 'text-base md:text-xl mt-8'} text-gray-300`}>
        Desenvolvemos lojas virtuais que convertem visitantes em clientes. 
        Conheça alguns dos nossos projetos que transformaram negócios e geraram resultados excepcionais.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product relative shrink-0 bg-gray-100 rounded-lg overflow-hidden"
    >
      <div 
        className="block group-hover/product:shadow-2xl flex items-center justify-center"
        style={{ 
          width: '525px', 
          height: '350px'
        }}
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-contain w-full h-full rounded-lg"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-lg"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-bold text-lg">
        {product.title}
      </h2>
    </motion.div>
  );
};
