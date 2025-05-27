"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
const ModernInput = React.forwardRef<HTMLInputElement, InputProps>(({
  className,
  type,
  ...props
}, ref) => {
  const [focused, setFocused] = React.useState(false);
  return <motion.div className="relative" whileFocus={{
    scale: 1.02
  }} transition={{
    duration: 0.2
  }}>
        <input type={type} className={cn("flex h-12 w-full rounded-lg border border-gray-800 bg-black px-4 py-3 text-sm text-white transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus:border-weethub-yellow focus:outline-none focus:ring-2 focus:ring-weethub-yellow/20 disabled:cursor-not-allowed disabled:opacity-50", focused && "border-weethub-yellow", className)} ref={ref} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} {...props} />
        {focused && <motion.div className="absolute inset-0 rounded-lg border-2 border-weethub-yellow pointer-events-none" initial={{
      opacity: 0,
      scale: 0.95
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      duration: 0.2
    }} />}
      </motion.div>;
});
ModernInput.displayName = "ModernInput";
const ModernLabel = React.forwardRef<React.ElementRef<"label">, React.ComponentPropsWithoutRef<"label">>(({
  className,
  ...props
}, ref) => <label ref={ref} className={cn("text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)} {...props} />);
ModernLabel.displayName = "ModernLabel";
export const SignupForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return <div className="mx-auto w-full max-w-md rounded-2xl bg-gradient-to-br from-gray-900 to-black p-8 shadow-2xl border border-gray-800">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6
    }}>
        <h2 className="text-2xl font-bold text-white mb-2">
          Fale Conosco
        </h2>
        <p className="text-gray-300 mb-8">
          Pronto para transformar seu negócio digital? Entre em contato conosco.
        </p>
      </motion.div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.6,
        delay: 0.1
      }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LabelInputContainer>
            <ModernLabel htmlFor="firstname">Nome</ModernLabel>
            <ModernInput id="firstname" placeholder="Seu nome" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <ModernLabel htmlFor="lastname">Sobrenome</ModernLabel>
            <ModernInput id="lastname" placeholder="Seu sobrenome" type="text" />
          </LabelInputContainer>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }}>
          <LabelInputContainer>
            <ModernLabel htmlFor="email">Email</ModernLabel>
            <ModernInput id="email" placeholder="seu@email.com" type="email" />
          </LabelInputContainer>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }}>
          <LabelInputContainer>
            <ModernLabel htmlFor="company">Empresa</ModernLabel>
            <ModernInput id="company" placeholder="Nome da sua empresa" type="text" />
          </LabelInputContainer>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }}>
          <LabelInputContainer>
            <ModernLabel htmlFor="message">Mensagem</ModernLabel>
            <textarea id="message" placeholder="Conte-nos sobre seu projeto..." className="flex min-h-[100px] w-full rounded-lg border border-gray-800 bg-black px-4 py-3 text-sm text-white transition-all duration-300 placeholder:text-gray-400 focus:border-weethub-yellow focus:outline-none focus:ring-2 focus:ring-weethub-yellow/20 disabled:cursor-not-allowed disabled:opacity-50" />
          </LabelInputContainer>
        </motion.div>

        <motion.button type="submit" whileHover={{
        scale: 1.02
      }} whileTap={{
        scale: 0.98
      }} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.5
      }} className="group relative block h-12 w-full rounded-lg bg-gradient-to-r from-weethub-yellow to-yellow-500 font-medium text-black shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 bg-[#ffd700]">
          Enviar Mensagem
          <BottomGradient />
        </motion.button>
      </form>
    </div>;
};
const BottomGradient = () => {
  return <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-weethub-yellow to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />
    </>;
};
const LabelInputContainer = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>;
};