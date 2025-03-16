"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import { WordRotate } from "@/components/magicui/word-rotate";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DownloadIcon } from "@radix-ui/react-icons";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="home" className="relative mx-auto max-w-[80rem] px-6 text-center md:px-8 scroll-mt-24">
      <div className="backdrop-filter-[12px] mt-24 inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
        <TextShimmer className="inline-flex items-center justify-center">
          <span>✨ Full-Stack Developer </span>{" "}
          {/* <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
        </TextShimmer>
      </div>
      <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-4xl font-medium leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <span className="block text-center">  
          <span className="inline-flex items-center">
            <span className="relative inline-block mr-2 w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20">
              <Image src="/waving-hand.png" alt="Waving hand emoji" fill className="object-contain"
              />
            </span>
            <span className="ml-2 inline-block align-middle">Hello! I&apos;m Mark,</span>
          </span>
        </span>
        <span className="block text-center">
          and I love to:  
          <WordRotate words={["innovate", "design", "build", "architect", "lead"]} />
        </span>
      </h1>
      <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Full-Stack Software Engineer from
        <br className="hidden md:block" /> the University of the Philippines Diliman.
      </p>
      <a href="/resume.pdf" download>
        <Button className={cn(
          "translate-y-[-1rem] animate-fade-in gap-1 hover:gap-2 rounded-lg text-white dark:text-black opacity-0 ease-in-out [--animation-delay:600ms] text-lg tracking-tighter",
          "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
        )}>
          <span>Download Resume</span>
          <DownloadIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </Button>
      </a>
      {/* <div ref={ref} className="relative mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]">
        <div className={`rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] ${inView ? "before:animate-image-glow" : ""}`}>
          <BorderBeam
            size={200}
            duration={12}
            delay={11}
            colorFrom="var(--color-one)"
            colorTo="var(--color-two)" />

          <Image
            src="/hero-dark.png"
            alt="Hero Image"
            className="hidden relative rounded-[inherit] border object-contain dark:block"
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw" />
          <Image
            src="/hero-light.png"
            alt="Hero Image"
            className="block relative rounded-[inherit] border object-contain dark:hidden"
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      </div> */}
    </section>
  );
}
