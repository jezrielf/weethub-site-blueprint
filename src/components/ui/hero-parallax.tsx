
"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "motion/react";
import { useIsMobile } from "@/hooks/use-mobile";
import { FloatingCards, FloatingCard } from "@/components/ui/floating-cards";

export const HeroParallax = ({
  products
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
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const springConfig = {
    stiffness: 300,
    damping: 30,
    bounce: 100
  };
  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  // Mobile Layout with Interactive Stack Cards
  if (isMobile) {
    return <div ref={ref} className="h-[80vh] py-12 overflow-hidden antialiased relative flex flex-col">
        <Header />
        <StackCards products={products} />
      </div>;
  }

  // Desktop Layout with reduced height
  return <div ref={ref} className="h-[120vh] py-16 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
      <Header />
      <motion.div style={{
      rotateX,
      rotateZ,
      translateY,
      opacity
    }} className="">
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map(product => <ProductCard product={product} translate={translateX} key={product.title} />)}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map(product => <ProductCard product={product} translate={translateXReverse} key={product.title} />)}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map(product => <ProductCard product={product} translate={translateX} key={product.title} />)}
        </motion.div>
      </motion.div>
    </div>;
};

export const Header = () => {
  const isMobile = useIsMobile();
  return <div className={`max-w-7xl relative mx-auto ${isMobile ? 'py-8 px-4' : 'py-12 md:py-20 px-4'} w-full left-0 top-0`}>
      <h1 className={`${isMobile ? 'text-2xl' : 'text-2xl md:text-6xl'} font-bold text-white`}>
        Lojas Virtuais de <br /> Alto Desempenho
      </h1>
      <p className={`max-w-2xl ${isMobile ? 'text-sm mt-3' : 'text-base md:text-xl mt-6'} text-gray-300`}>
        Desenvolvemos lojas virtuais que convertem visitantes em clientes. 
        Conheça alguns dos nossos projetos que transformaram negócios e geraram resultados excepcionais.
      </p>
    </div>;
};

export const ProductCard = ({
  product,
  translate
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return <motion.div style={{
    x: translate
  }} whileHover={{
    y: -20
  }} key={product.title} className="group/product relative shrink-0 bg-gray-100 rounded-lg overflow-hidden">
      <div className="block group-hover/product:shadow-2xl flex items-center justify-center" style={{
      width: '525px',
      height: '350px'
    }}>
        <img src={product.thumbnail} alt={product.title} className="object-contain w-full h-full rounded-lg" loading="lazy" />
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-lg"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-bold text-lg">
        {product.title}
      </h2>
    </motion.div>;
};

// New Interactive Stack Cards Component for Mobile
const StackCards = ({ products }: { products: { title: string; link: string; thumbnail: string; }[] }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [dragDirection, setDragDirection] = React.useState<'left' | 'right' | null>(null);

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 100;
    if (info.offset.x > threshold && currentIndex > 0) {
      setDragDirection('right');
      setTimeout(() => {
        setCurrentIndex(prev => prev - 1);
        setDragDirection(null);
      }, 200);
    } else if (info.offset.x < -threshold && currentIndex < products.length - 1) {
      setDragDirection('left');
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
        setDragDirection(null);
      }, 200);
    }
  };

  const nextCard = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 relative">
      <FloatingCards className="w-full max-w-sm mx-auto">
        <div className="relative h-[400px] w-full">
          {products.slice(currentIndex, currentIndex + 3).map((product, index) => {
            const isActive = index === 0;
            const zIndex = 3 - index;
            const scale = 1 - (index * 0.05);
            const opacity = 1 - (index * 0.3);
            const yOffset = index * 10;

            return (
              <motion.div
                key={`${product.title}-${currentIndex + index}`}
                className="absolute inset-0"
                style={{ zIndex }}
                initial={{ scale, opacity, y: yOffset }}
                animate={{ 
                  scale: dragDirection === 'left' && isActive ? 0.95 : 
                         dragDirection === 'right' && isActive ? 0.95 : scale,
                  opacity,
                  y: yOffset,
                  x: dragDirection === 'left' && isActive ? -50 : 
                     dragDirection === 'right' && isActive ? 50 : 0
                }}
                transition={{ duration: 0.3 }}
                drag={isActive ? "x" : false}
                dragConstraints={{ left: -200, right: 200 }}
                dragElastic={0.2}
                onDragEnd={isActive ? handleDragEnd : undefined}
                whileDrag={isActive ? { scale: 0.95, rotate: 5 } : {}}
              >
                <FloatingCard className="h-full w-full overflow-hidden cursor-grab active:cursor-grabbing">
                  <div className="relative h-full w-full">
                    <div className="h-3/4 w-full bg-gray-100 rounded-t-lg overflow-hidden">
                      <img 
                        src={product.thumbnail} 
                        alt={product.title}
                        className="w-full h-full object-contain"
                        draggable={false}
                      />
                    </div>
                    <div className="h-1/4 p-4 flex items-center justify-center">
                      <h3 className="text-white font-bold text-lg text-center leading-tight">
                        {product.title}
                      </h3>
                    </div>
                  </div>
                </FloatingCard>
              </motion.div>
            );
          })}
        </div>
      </FloatingCards>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-weethub-yellow scale-125' 
                : 'bg-gray-600 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Swipe Instructions */}
      <motion.p 
        className="text-gray-400 text-sm text-center mt-4"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: 2 }}
      >
        Arraste para os lados ou toque nos pontos
      </motion.p>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
        <button
          onClick={prevCard}
          disabled={currentIndex === 0}
          className={`w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-gray-600 flex items-center justify-center pointer-events-auto transition-all duration-300 ${
            currentIndex === 0 ? 'opacity-30' : 'opacity-70 hover:opacity-100 hover:bg-weethub-yellow/20'
          }`}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextCard}
          disabled={currentIndex === products.length - 1}
          className={`w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-gray-600 flex items-center justify-center pointer-events-auto transition-all duration-300 ${
            currentIndex === products.length - 1 ? 'opacity-30' : 'opacity-70 hover:opacity-100 hover:bg-weethub-yellow/20'
          }`}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};
