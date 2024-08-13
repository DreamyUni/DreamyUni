"use client";

import React from "react";
import Image from "next/image";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FlipWords } from "@/components/ui/flip-words";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function LandingPage() {
  const words = ["Scholarships", "Internships", "Extracurriculars", "College Fit"];
  const testimonials = [
    {
      quote: "DreamyUni helped me secure a scholarship to my dream school!",
      name: "Alex Johnson",
      title: "Harvard University '24"
    },
    {
      quote: "The personalized guidance was invaluable in my college application process.",
      name: "Samantha Lee",
      title: "Stanford University '25"
    },
    {
      quote: "I found the perfect internship opportunity through DreamyUni's network.",
      name: "Michael Chen",
      title: "MIT '23"
    },
    {
      quote: "I found the perfect internship opportunity through DreamyUni's network.",
      name: "Michael Chen",
      title: "MIT '23"
    },
    {
      quote: "I found the perfect internship opportunity through DreamyUni's network.",
      name: "Michael Chen",
      title: "MIT '23"
    },
    {
      quote: "I found the perfect internship opportunity through DreamyUni's network.",
      name: "Michael Chen",
      title: "MIT '23"
    },
    {
      quote: "I found the perfect internship opportunity through DreamyUni's network.",
      name: "Michael Chen",
      title: "MIT '23"
    },
    {
      quote: "I found the perfect internship opportunity through DreamyUni's network.",
      name: "Michael Chen",
      title: "MIT '23"
    },
    {
      quote: "I found the perfect internship opportunity through DreamyUni's network.",
      name: "Michael Chen",
      title: "MIT '23"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8C3C3] to-[#B4E4E8]">
      <HeroParallax />
      <AuroraBackground>
        <main className="relative z-10">
          <section className="py-20 bg-[#F0E6F6]">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#6C567B] mb-8">Discover Your Path with DreamyUni</h2>
              <FlipWords words={words} />
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center text-[#334E68] mb-8">What Our Students Say</h2>
              <InfiniteMovingCards items={testimonials} />
            </div>
          </section>

          <section className="py-20 bg-gradient-to-r from-[#FFE5B4] to-[#FFAAA5]">
            <div className="container mx-auto max-w-md">
              <CardContainer>
                <CardBody className="bg-white rounded-xl shadow-xl">
                  <CardItem translateZ="50" className="w-full">
                    <h2 className="text-2xl font-bold text-center text-[#334E68] mb-4">Join DreamyUni Today</h2>
                    <p className="text-center text-[#707070] mb-6">Get personalized guidance to reach your dream university.</p>
                    <form className="space-y-4">
                      <input type="text" placeholder="Name" className="w-full p-2 rounded border border-gray-300" />
                      <input type="email" placeholder="Email" className="w-full p-2 rounded border border-gray-300" />
                      <select className="w-full p-2 rounded border border-gray-300">
                        <option>Select your interests</option>
                        <option>Scholarships</option>
                        <option>Internships</option>
                        <option>Extracurriculars</option>
                      </select>
                      <button type="submit" className="w-full p-2 bg-[#8BC6EC] text-white rounded hover:bg-[#7AB5DB] transition duration-300">
                        Sign Up
                      </button>
                    </form>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </section>
        </main>
      </AuroraBackground>

      <footer className="bg-[#334E68] text-[#D8D8D8] py-10">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p>DreamyUni helps students achieve their university dreams through personalized guidance and resources.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p>Email: info@dreamyuni.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

