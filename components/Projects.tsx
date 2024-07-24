"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { HeroParallax } from "./ui/Hero-parallax";
import { LinkPreview } from "./ui/LinkPreview";
import { Vortex } from "./ui/Vortex";

const Projects = () => {
  return (
    <section>
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
      <div className="text-center">
        <div className="mb-6 text-2xl font-semibold">
          Want to know more about my Projects?
          </div>
          <LinkPreview url="https://github.com/aryanraj13" className="font-bold">
        
      <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:text-slate-400">
          Visit My Github Profile
        </button>
        
        </LinkPreview>
        </div>
        </Vortex>
      <HeroParallax products={products} />
    </section>
  )
};

export default Projects;

export const products = [
  {
    title: "Boxzone",
    link: "https://boxzone.netlify.app/",
    thumbnail:
      "/pr1.png",
  },
  {
    title: "LikeLoop",
    link: "https://likeloop.netlify.app/",
    thumbnail:
      "/pr2.png",
  },
  {
    title: "CyberScoop",
    link: "https://cyber-scoop-blog.vercel.app/",
    thumbnail:
      "/pr3.png",
  },

  {
    title: "NewsFlow",
    link: "https://github.com/aryanraj13/NewsFlow",
    thumbnail:
      "/pr4.png",
  },
  {
    title: "eNotes",
    link: "https://enotes-cloud.netlify.app/login",
    thumbnail:
      "/pr5.png",
  },
  {
    title: "NewsFlow",
    link: "https://github.com/aryanraj13/NewsFlow",
    thumbnail:
      "/pr4.png",
  },

  {
    title: "eNotes",
    link: "https://enotes-cloud.netlify.app/login",
    thumbnail:
      "/pr5.png",
  },
  {
    title: "GlobeGlider",
    link: "https://github.com/aryanraj13/Travel-and-Tourism-Website",
    thumbnail:
      "/pr6.png",
  },
  {
    title: "NewsFlow",
    link: "https://github.com/aryanraj13/NewsFlow",
    thumbnail:
      "/pr4.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Dropout Visualize",
    link: "https://github.com/aryanraj13/SIH-2023",
    thumbnail:
      "/pr8.png",
  },

  {
    title: "ScoreStream Pro",
    link: "https://github.com/aryanraj13/Cricket-Updates-Chrome-Extension",
    thumbnail:
      "/pr7.png",
  },
  {
    title: "Boxzone",
    link: "https://boxzone.netlify.app/",
    thumbnail:
      "/pr9.png",
  },
  {
    title: "Dropout Visualize",
    link: "https://github.com/aryanraj13/SIH-2023",
    thumbnail:
      "/pr8.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];