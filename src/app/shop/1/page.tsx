"use client";

import Image from "next/image";
import React, { useRef } from "react";
import HeroImage from "@/assets/image 10.png";
import FirstImage from "@/assets/image 11.png";
import SecondImage from "@/assets/image 12.png";
import { Ratings } from "@/components/ui/ratings";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useLocalStorage from "@/lib/useLocalStorage";

function Page() {
  const [_, setCart] = useLocalStorage<any>("cart", []);
  const inputRef = useRef<HTMLInputElement>(null);

  const addToCart = () => {
    setCart((prevCart: any) => {
      return [...prevCart, { id: 1, quantity: inputRef.current?.value || 1 }];
    });
  };

  return (
    <div className="p-5">
      <div className="grid grid-cols-2 gap-10 mb-10">
        <div className="relative">
          <Image src={HeroImage} alt="product" fill />
        </div>
        <div className="space-y-2">
          <h2 className="text-4xl">ZOOM75 V2</h2>
          <p className="font-medium text-2xl text-[#9F9F9F]">
            Rp. 2.500.000,00
          </p>
          <div className="flex space-x-2 items-center">
            <Ratings rating={4.5} variant="yellow" />
            <Separator orientation="vertical" className="h-5" />
            <p>5 Customer Review</p>
          </div>
          <p className="max-w-md">
            The Zoom75 by Meletrix is their latest installment in the Zoom
            Series of keyboards. This time, they are taking customizability and
            features to the next level. Zoom75 has four different options for
            top right configurations. Two 1U keys, 1U key with knob, badge, and
            OLED screen.
          </p>
          <div className="mt-2">
            <p className="text-[#9F9F9F] mb-2">Model</p>
            <div className="space-x-4">
              <Button>All in One Pack</Button>
              <Button variant="ghost">Essential Edition</Button>
              <Button variant="ghost">Special Edition</Button>
            </div>
            <p className="text-[#9F9F9F] mt-4 mb-2">Color</p>
            <div className="flex space-x-8">
              <div className="flex space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#816DFA]"></div>
                <div className="w-8 h-8 rounded-full bg-black"></div>
              </div>
              <div className="flex space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#088323]"></div>
                <div className="w-8 h-8 rounded-full bg-[#16BFA1]"></div>
              </div>
              <div className="flex space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#000F9A]"></div>
                <div className="w-8 h-8 rounded-full bg-[#C30D0D]"></div>
              </div>
            </div>
          </div>
          <div className="flex py-4 space-x-4">
            <Input
              type="number"
              className="w-36"
              min={1}
              defaultValue={1}
              ref={inputRef}
            />
            <Button variant="outline" onClick={addToCart}>
              Add To Cart
            </Button>
            <Button variant="outline">+ Compare</Button>
          </div>
          <Separator />
          <div className="text-[#9F9F9F] pt-6">
            <p>SKU : #Tag#420</p>
            <p>Category : Mechanical Keyboard</p>
            <p>Tags : CustomKeyboard</p>
            <p>Share</p>
          </div>
        </div>
      </div>
      <Separator />
      <div className="flex items-center justify-around my-10">
        <p className="text-2xl font-medium">Description</p>
        <p className="text-2xl font-medium">Additional Information</p>
        <p className="text-2xl font-medium">Reviews [5]</p>
      </div>
      <p className="mx-auto block text-center text-justify max-w-5xl mb-10">
        The ZOOM series of keyboards represents a look inward, paying homage to
        great mechanical keyboard designs to come before it in a classic,
        timeless look. Each board in the series aims to be a distillation of
        positive innovation and proven engineering, featuring simple, classic
        design, full isolation mounting, and a carefully analyzed relief-cut
        plate for consistent typing feel.  After nearly a year of research and
        development, countless design iterations, and numerous prototypes, we
        debuted our first keyboard in the ZOOM series, the ZOOM75.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="relative overflow-hidden rounded-md">
          <Image src={FirstImage} alt="First" />
        </div>
        <div className="relative overflow-hidden rounded-md">
          <Image src={SecondImage} alt="Second" />
        </div>
      </div>
    </div>
  );
}

export default Page;
