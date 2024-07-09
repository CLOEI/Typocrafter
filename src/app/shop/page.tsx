"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import HeroImage from "@/assets/GMK Color Panels Keycaps _ Cherry Profile Keycaps Set _ PBT Material _ Keycaps For MX Switch _ GMk Clone Artisan Keycap Set 1.png";
import Image from "next/image";
import {
  BadgeCheck,
  Filter,
  Headset,
  PackageSearch,
  SlidersHorizontal,
  Trophy,
  Truck,
} from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import Highlight from "@/components/Highlight";
import Product from "@/components/Product";
import Link from "next/link";

function Page() {
  return (
    <div>
      <div className="relative w-full h-36 md:h-48 text-white">
        <Image src={HeroImage} layout="fill" alt="hero" objectFit="cover" />,
        <div className="absolute bottom-2 right-2 font-medium">
          <h2 className="text-5xl">Shop</h2>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="text-white">
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-slate-100">Shop</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="h-12 bg-primary text-xs md:h-20">
        <div className="flex items-center h-full p-2 space-x-2 md:px-14 md:space-x-4">
          <SlidersHorizontal size={16} />
          <div className="h-full flex items-center space-x-2">
            <Separator
              orientation="vertical"
              className="h-full w-[2px] bg-gray-400"
            />
            <p>Showing 0-0 of 0 results</p>
          </div>
        </div>
      </div>
      <div className="h-screen grid grid-cols-6">
        <Link href="/shop/1">
          <Product
            data={{
              by: "Cloei",
              price: 2500000,
              discountedPrice: 0,
              discount: 0,
              isNew: false,
            }}
            product="ZOOM75 V2"
          />
        </Link>
      </div>
      <Highlight />
    </div>
  );
}

export default Page;
