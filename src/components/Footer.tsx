import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

function Footer() {
  return (
    <div className="p-2 md:px-24">
      <div className="mt-4 grid grid-cols-2 gap-2 md:gap-0 md:grid-cols-4 content-start">
        <div className="">
          <p className="text-xl md:text-2xl font-bold">TypoCrafter</p>
          <p className="mt-[50px] w-2/3 text-xs md:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
            perspiciatis.
          </p>
        </div>
        <div className="">
          <p className="font-medium">Links</p>
          <ul className="font-medium mt-[55px] space-y-2 md:space-y-[46px] text-xs md:text-base">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <p className="font-medium">Help</p>
          <ul className="font-medium mt-[55px] space-y-2 md:space-y-[46px] text-xs md:text-base">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
        <div className="">
          <p className="font-medium">Newsletter</p>
          <div className="mt-2">
            <Input placeholder="Enter your email address" />
            <Button
              variant="outline"
              className="border-primary text-primary mt-2"
            >
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>
      <div className="pb-[38px] mt-10">
        <Separator />
        <p className="mt-[35px]">2024 TypoCrafter All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
