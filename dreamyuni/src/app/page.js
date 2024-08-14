"use client";

import React, { useEffect, useRef } from "react";
import dynamic from 'next/dynamic';
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Image from "next/image";
import Navbar from '@/components/ui/Navbar';
import ClientWrapper from '@/components/ClientWrapper';

const HeroParallax = dynamic(() => import("@/components/ui/hero-parallax").then((mod) => mod.HeroParallax), { ssr: false });
const AuroraBackground = dynamic(() => import("@/components/ui/aurora-background").then((mod) => mod.AuroraBackground), { ssr: false });
const FlipWords = dynamic(() => import("@/components/ui/flip-words").then((mod) => mod.FlipWords), { ssr: false });
const InfiniteMovingCards = dynamic(() => import("@/components/ui/infinite-moving-cards").then((mod) => mod.InfiniteMovingCards), { ssr: false });
const CardContainer = dynamic(() => import("@/components/ui/3d-card").then((mod) => mod.CardContainer), { ssr: false });
const CardBody = dynamic(() => import("@/components/ui/3d-card").then((mod) => mod.CardBody), { ssr: false });
const CardItem = dynamic(() => import("@/components/ui/3d-card").then((mod) => mod.CardItem), { ssr: false });
const MacbookScroll = dynamic(() => import("@/components/ui/macbook-scroll").then((mod) => mod.MacbookScroll), { ssr: false });

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
    }
  ];

  return (
    <ClientWrapper>
      <div className="min-h-screen bg-[#121212] text-white">
        <Navbar />
        <MacbookScroll
          src="/images/dreamyuni.png"
          showGradient={false}
          title="Unlock Your Dream University with DreamyUni"
        />
        <AuroraBackground>
          <main className="relative z-10 pt-16">
            <section className="py-20 bg-[#1E1E1E]">
              <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-[#E0E0E0] mb-8">Discover Your Path with DreamyUni</h2>
                <FlipWords words={words} />
              </div>
              <div id="threejs-hero" className="w-full h-[500px] mt-10">
                <Canvas>
                  <HouseScene />
                </Canvas>
              </div>
            </section>

            <section className="py-20 bg-[#252525]">
              <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center text-[#E0E0E0] mb-8">What Our Students Say</h2>
                <InfiniteMovingCards items={testimonials} />
              </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-[#2A2A2A] to-[#323232]">
              <div className="container mx-auto max-w-md">
                <CardContainer>
                  <CardBody className="bg-[#1A1A1A] rounded-xl shadow-xl">
                    <CardItem translateZ="50" className="w-full">
                      <h2 className="text-2xl font-bold text-center text-[#E0E0E0] mb-4">Join DreamyUni Today</h2>
                      <p className="text-center text-[#B0B0B0] mb-6">Get personalized guidance to reach your dream university.</p>
                      <form className="space-y-4">
                        <input type="text" placeholder="Name" className="w-full p-2 rounded border border-gray-600 bg-[#2A2A2A] text-white" />
                        <input type="email" placeholder="Email" className="w-full p-2 rounded border border-gray-600 bg-[#2A2A2A] text-white" />
                        <select className="w-full p-2 rounded border border-gray-600 bg-[#2A2A2A] text-white">
                          <option>Select your interests</option>
                          <option>Scholarships</option>
                          <option>Internships</option>
                          <option>Extracurriculars</option>
                        </select>
                        <button type="submit" className="w-full p-2 bg-[#4A4A4A] text-white rounded hover:bg-[#5A5A5A] transition duration-300">
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

        <footer className="bg-[#1A1A1A] text-[#B0B0B0] py-10">
          <div className="container mx-auto flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4 text-white">About Us</h3>
              <p>DreamyUni helps students achieve their university dreams through personalized guidance and resources.</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
              <p>Email: info@dreamyuni.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4 text-white">Links</h3>
              <ul>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4">
              <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ClientWrapper>
  );
}

function HouseScene() {
  const humanRef = useRef();
  const sceneRef = useRef(new THREE.Scene());

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("/house/scene.gltf", (gltf) => {
      const house = gltf.scene;
      house.position.set(0, 0, 0);
      house.scale.set(5, 5, 5);
      sceneRef.current.add(house);
    });

    loader.load("/human/scene.gltf", (gltf) => {
      const human = gltf.scene;
      human.scale.set(1, 1, 1);
      human.position.set(0, 5, 0);
      human.castShadow = true;
      sceneRef.current.add(human);
      humanRef.current = human;
    });
  }, []);

  useFrame(() => {
    const handleKeyDown = (event) => {
      const speed = 0.1;
      if (!humanRef.current) return;

      switch (event.key) {
        case "w":
          humanRef.current.position.z -= speed;
          break;
        case "s":
          humanRef.current.position.z += speed;
          break;
        case "a":
          humanRef.current.position.x -= speed;
          break;
        case "d":
          humanRef.current.position.x += speed;
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      <primitive object={sceneRef.current} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <OrbitControls />
    </>
  );
}