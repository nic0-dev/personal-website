"use client";

import { TextAnimate } from "@/components/magicui/text-animate";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function AboutSection() {
  function calculateAge(birthday: string | number | Date) {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  
  const age = calculateAge("2002-04-06");
  const description = (
    <>
      I am a {age}-year-old experienced <span className="font-bold">Software Engineer </span>
      who is passionate about exploring new ideas and technologies. I enjoy tackling challenges, and I am always 
      on the lookout for opportunities to learn and grow, both personally and professionally. Moreover, my ambition 
      is fueled by a desire to use my technical expertise to craft systems that significantly <span className="underline">
      improve everyday life and streamline business operations</span>. I believe in continuous improvement and 
      always strive to contribute positively to my community.
    </>
  );

  return (
    <section id="about">
      <div className="w-full mt-64 mx-auto flex flex-col">
        <TextAnimate className="font-light text-center" animation="blurInUp" by="character" once>
          About me
        </TextAnimate>
        <div className="w-full mt-12 border-y flex flex-col-reverse lg:flex-row gap-8">
          <div className="w-full mx-auto max-w-screen-xl text-justify py-14 px-8 flex flex-col gap-8">
            <div className="flex flex-row gap-4">
              <div className="h-auto w-4 bg-blue-600"></div>
              <span>{description}</span>
            </div>

            <Card className="text-left">
              <CardHeader>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-1">
                  <CardTitle className="flex w-full lg:w-2/3 text-left">University of the Philippines Diliman</CardTitle>
                  <div className="w-full lg:w-1/3 text-sm font-light text-muted-foreground text-left lg:text-right">Sep 2021 — Jul 2025</div>
                </div>
                <CardDescription>Bachelor of Science in Computer Engineering, <span className="italic">Magna Cum Laude</span></CardDescription>
              </CardHeader>
              <div className="w-full border-t mb-4"></div>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground"><ChevronRight size={16} className="mr-1"/><span className="text-white">DOST-SEI Merit Scholar</span></div>
                <div className="flex items-start text-sm text-muted-foreground">
                <ChevronRight size={24} className="mr-1" />
                <span className="mt-[2px]"><span className="text-white">Coursework: </span> 
                  Data Structures and Algorithms, Object-Oriented Programming, Software Engineering, IoT, Embedded Systems, Blockchain, Cloud Computing</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-left">
              <CardHeader>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-1">
                  <CardTitle className="flex w-full lg:w-2/3 text-left">Manila Science High School</CardTitle>
                  <div className="w-full lg:w-1/3 text-sm font-light text-muted-foreground text-left lg:text-right">Jun 2015 — Jul 2021</div>
                </div>
                <CardDescription>Science, Technology, Engineering, and Mathematics (STEM) Strand, <span className="italic">Rank 9</span></CardDescription>
              </CardHeader>
              <div className="w-full border-t mb-4"></div>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground"><ChevronRight size={16} className="mr-1"/><span className="text-white">Graduated with High Honors</span></div>
                <div className="flex items-start text-sm text-muted-foreground">
                  <ChevronRight size={24} className="mr-1" />
                  <span className="mt-[2px]"><span className="text-white">Achievements: </span> 
                    Highest Extracurricular Distinction, National Olympiad in Informatics (NOI) Finalist (AY 2018-2021), Computer Society President, Science Club Vice President
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="w-auto flex justify-end">
            <Image src="/about-picture.jpg" alt="My Picture" width={800} height={800} className="object-cover"></Image>
          </div>
        </div>
      </div>
    </section>
  );
}