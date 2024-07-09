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
import HeroImage from "@/assets/image 18.png";
import Image from "next/image";
import React from "react";
import useLocalStorage from "@/lib/useLocalStorage";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Page() {
  const [cart, setCart] = useLocalStorage<any>("cart", []);

  const getTotal = () => {
    let total = 0;
    cart.forEach((item: any) => {
      total += item.quantity * 2500000;
    });
    return total;
  };

  return (
    <div>
      <div className="relative w-full h-36 md:h-48 text-white">
        <Image src={HeroImage} layout="fill" alt="hero" objectFit="cover" />,
        <div className="absolute top-1/2 right-1/2 font-medium translate-x-1/2 -translate-y-1/2">
          <h2 className="text-5xl">Cart</h2>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="text-white">
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-slate-100">Cart</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="min-h-screen">
        <div className="mt-2">
          <div className="grid grid-cols-5 bg-primary py-2">
            <span></span>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          {cart.map((item: any, i: number) => (
            <div className="grid grid-cols-5 items-center p-2" key={i}>
              <span className="relative w-12 h-12">
                <Image src={HeroImage} alt="product" fill objectFit="cover" />
              </span>
              <p>ZOOM75 V2</p>
              <p>Rp. 2.500.000,00</p>
              <p>{item.quantity}</p>
              <p>Rp. {item.quantity * 2500000}</p>
            </div>
          ))}
          <div className="flex bg-primary p-2 space-x-8 justify-between">
            <div className="flex space-x-4">
              <p>Total</p>
              <p>{getTotal()}</p>
            </div>
            <Link href="/checkout">
              <Button variant="outline">Checkout</Button>
            </Link>
          </div>
        </div>
      </div>
      <Highlight />
    </div>
  );
}

export default Page;
