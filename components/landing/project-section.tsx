"use client";

import Image from "next/image";
import { FlickeringGrid } from "../magicui/flickering-grid";
import { TextAnimate } from "../magicui/text-animate";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

type Project = {
  id: string;
  name: string;
  image: string;
  tags: string[];
  github: string;
  glowColor: string;
};

const projects: Project[] = [
  {
    id: "project1",
    name: "Cool Project",
    image: "/thumbnail/clettr-image-block.png",
    tags: ["React", "Tailwind"],
    github: "https://github.com/username/project1",
    glowColor: "#FF00FF",
  },
  {
    id: "project2",
    name: "Awesome App",
    image: "/companies/adi-bg.jpg",
    tags: ["Next.js", "TypeScript"],
    github: "https://github.com/username/project2",
    glowColor: "#00ffff",
  },
  {
    id: "project1",
    name: "Cool Project",
    image: "/thumbnail/clettr-image-block.png",
    tags: ["React", "Tailwind"],
    github: "https://github.com/username/project1",
    glowColor: "#FF00FF",
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="scroll-mt-32 relative">
      {/* FlickeringGrid as background */}
      <TextAnimate className="font-light text-center pb-8" animation="blurInUp" by="character" once>
        Projects
      </TextAnimate>
      <div className="relative z-10 w-full py-16 mx-auto flex flex-col px-4">
        <FlickeringGrid 
          className="absolute inset-0 z-0 w-full h-full" 
          squareSize={4} 
          gridGap={6} 
          color="#eeeeee" 
          maxOpacity={0.2} 
          flickerChance={0.05}
        />
        {/* Grid container */}
        <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8">
          {projects.map((project) => {
            const glowShadowClass = `shadow-[0_0_40px_\\#${project.glowColor.slice(1)}]`;
            return (
              <motion.div
                key={project.id}
                className="relative group cursor-pointer overflow-visible rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                {/* Inner wrapper to clip the image */}
                <div className="relative rounded-lg overflow-hidden aspect-[20/12]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Glow overlay using Tailwind's shadow utility, only visible on hover */}
                <div
                  className={`absolute inset-0 pointer-events-none rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${glowShadowClass}`}
                />
                {/* Hover overlay with details */}
                <div className="absolute rounded-lg inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.h3
                    className="text-white text-xl font-bold mb-2"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.name}
                  </motion.h3>
                  <motion.div
                    className="flex space-x-2 mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-white border border-white rounded px-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GitHubLogoIcon className="h-6 w-6" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}