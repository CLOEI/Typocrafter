"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Highlight from "@/components/Highlight";
import HeroImage from "@/assets/image 20.png";
import Image from "next/image";
import React from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Page() {
  return (
    <div>
      <div className="relative w-full h-36 md:h-48 text-white">
        <Image src={HeroImage} layout="fill" alt="hero" objectFit="cover" />,
        <div className="absolute top-1/2 right-1/2 font-medium translate-x-1/2 -translate-y-1/2">
          <h2 className="text-5xl">Contact</h2>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="text-white">
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-slate-100">
                  Contact
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="text-center mt-10 px-2">
        <h2 className="font-semibold text-xl">Get In Touch With Us</h2>
        <p className="text-muted-foreground">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
        <div className="flex flex-col md:flex-row text-left my-8 w-full md:gap-40 md:px-14">
          <div className="md:order-2 md:flex-[2]">
            <p className="font-medium">Your name</p>
            <Input placeholder="John doe" />
            <p className="font-medium mt-2">Email address</p>
            <Input placeholder="abc@example.com" />
            <p className="font-medium mt-2">Subject</p>
            <Input placeholder="Shipping" />
            <p className="font-medium mt-2">Message</p>
            <Input placeholder="Haven't received my package" />
            <Button className="mt-2">Submit</Button>
          </div>
          <div className="space-y-2 mt-10 md:mt-0 md:order-1">
            <div className="flex items-center space-x-2">
              <MapPin />
              <div>
                <p className="font-medium text-lg">Address</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Phone />
              <div>
                <p className="font-medium text-lg">Phone</p>
                <p>Hotline : +(xx) xxx-xxxx </p>
                <p>Mobile : +(xx) xxx-xxxx </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock />
              <div>
                <p className="font-medium text-lg">Working Time</p>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Highlight />
    </div>
  );
}

export default Page;
