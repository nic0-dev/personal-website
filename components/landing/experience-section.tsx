"use client";

import { useState } from "react";
import Image from "next/image";
import { TextAnimate } from "../magicui/text-animate";

type Company = {
  id: string;
  bgImage: string;
  logo: string;
  width: number;
  altBg: string;
  altLogo: string;
  category: string;
  label: string;
  position: string;
  details: string;
  border: string;
  techStack: string[];
};

const companies: Company[] = [
  {
    id: "manulife",
    bgImage: "/companies/manulife-bg.jpg",
    logo: "/companies/manulife.svg",
    width: 120,
    border: "border-b border-r",
    altBg: "Green Gradient Background",
    altLogo: "Manulife Logo",
    category: "Financial Services (Insurance)",
    label: "Manulife IT Delivery Center Asia, Inc.",
    position: "Full Stack Software Engineer Intern",
    details:
      "At Manulife, Collaborated in the development of a reactive microservices-based document management system in an Agile environment, resolving 4 backlog tickets and integrating 3 external APIs. I also streamlined CI/CD pipelines, implementing test-driven development to ensure timely delivery of incremental code changes and reducing post-deployment issues by 25%.",
    techStack: ["Angular", "Spring Booth", "Node", "MongoDB", "Bitbucket", "Jenkins", "GraphQL", "Azure", "Snyk", "SonarQube", "Jira"]
  },
  {
    id: "azeus",
    bgImage: "/companies/azeus-bg.jpg",
    logo: "/companies/azeus.svg",
    width: 100,
    border: "border-b border-r",
    altBg: "Blue and Red Gradient Background",
    altLogo: "Azeus Logo",
    category: "IT Services",
    label: "Azeus Systems Philippines, Ltd.",
    position: "Web Developer Intern",
    details:
      "At Azeus, I created and migrated 8 forms from Convene ESG v2 to ESG v3, using the Builder Pattern in an Agile Development environment, boosting code reusability and maintainability. I also developed and maintained unit tests and end-to-end tests during migration, creating mock data for integration testing, resulting in 94% code coverage and 82.1% test coverage.",
    techStack: ["Vue.js", "Quasar", "Jest", "Docker", "Javascript", "Playwright", "GitLab", "Redmine"],
  },
  {
    id: "maya",
    bgImage: "/companies/maya-bg.jpg",
    logo: "/companies/maya.svg",
    width: 100,
    border: "border-b",
    altBg: "Green Gradient Background",
    altLogo: "Maya Logo",
    category: "Fintech (Digital Payments)",
    label: "Maya (Voyager Innovations, Inc.)",
    position: "User Experience and Design Intern",
    details:
      "At Maya, I Concept-tested Maya Business 3.0s Payment Links feature for B2B/B2C MSMEs, uncovering key pain points and mapping the user journey, leading to a 40% reduction in task completion time. Furthermore, I benchmarked and designed application assets, raising user engagement by 30% through cohesive design strategies. I was also able to redesign the High Engagement Banking system for the Maya Consumer app to streamline interest-boosting tasks for users, analyzing user feedback to refine UI/UX flows, resulting in a lower task completion time of 20%.",
    techStack: ["Figma", "Typeform", "Miro", "Google Workspace"],
  },
  {
    id: "adi",
    bgImage: "/companies/adi-bg.jpg",
    logo: "/companies/adi.svg",
    width: 120,
    border: "border-x",
    altBg: "Blue Gradient Background",
    altLogo: "Analog Devices Inc. Logo",
    category: "Semiconductor",
    label: "Analog Devices, Inc.",
    position: "Digital Design Verification Engineer Intern",
    details:
      "At Analog Devices, I created an optimized test plan, achieving 97.84% test coverage in the RTL design of an elevator control system. I also automated test procedures through regression, reducing errors by 30% and expediting release cycles.",
    techStack: ["Verilog", "Xcelium", "Adsim", "vManager", "Shell Script", "Jira", "Linux OS"],
  },
  {
    id: "gcash",
    bgImage: "/companies/gcash-bg.jpg",
    logo: "/companies/gcash.svg",
    width: 120,
    border: "border-r",
    altBg: "Blue Gradient Background",
    altLogo: "GCash Logo",
    category: "Fintech (Digital Payments)",
    label: "GCash (Mynt - Globe Fintech Innovations, Inc.)",
    position: "Techology and Operations Intern",
    details:
      "At GCash, I led the development of a loan management system to improve GLoan audit for Mynt and Fuse Lending. I also documented incident handling procedures, accelerating resolution times and ensuring higher service availability.",
    techStack: ["Figma", "React", "Node.js", "Git", "GitHub", "Jira", "Confluence"],
  },
];

export default function ExperienceSection() {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  
  return (
    <section id="experience" className="scroll-mt-16 md:scroll-mt-24">
      <div className="w-full">
        <TextAnimate className="font-light text-center" animation="blurInUp" by="character" once>
          Work Experience
        </TextAnimate>
        <div className="w-full flex flex-col md:flex-row my-8 md:my-16">
          <div className="w-full flex flex-wrap justify-center border">
            {companies.map((company) => (
              <div key={company.id} role="button" onClick={() => setSelectedCompany(company)}
                className={`group relative w-1/3 h-[8rem] md:h-[12rem] ${company.border} p-4 text-sm flex flex-col justify-between cursor-pointer`}
              >
                <Image src={company.bgImage} alt={company.altBg} fill
                  className={`object-cover transition-opacity duration-300 ${
                    selectedCompany?.id === company.id? "opacity-100"
                      : "opacity-0 md:group-hover:opacity-100 md:group-active:opacity-100"
                  }`}
                />
                <div className="relative z-10">
                  <Image src={company.logo} alt={company.altLogo} width={company.width} height={60} />
                </div>
                <div className="relative z-10">
                  <div className="flex flex-col gap-0">
                    <span className="text-[10px] md:text-xs text-muted-foreground leading-3 md:leading-normal">
                      {company.category}
                    </span>
                    <span className="text-[10px] md:text-xs leading-3 md:leading-normal">
                      {company.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Experiences details */}
          <div className="w-full p-8 border-y text-sm overflow-auto flex flex-col justify-between">
            {selectedCompany ? (
              <><div>
                <h4 className="text-sm text-[#a371f7] font-semibold mb-1">{selectedCompany.position}</h4>
                <h3 className="text-lg font-semibold">{selectedCompany.label}</h3>
                <p className="text-[10px] md:text-sm mt-2 leading-4 md:leading-normal">{selectedCompany.details}</p>
              </div><div>
                <h4 className="text-sm text-[#a371f7] pt-4">Tools / Tech Stack: </h4>
                <p className="text-[10px] md:text-sm leading-4 md:leading-normal text-muted-foreground">
                  {selectedCompany.techStack.join(" | ")}
                </p>
              </div></>
            ) : (
              <p>Click on the companies to view more details about my achievements.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}