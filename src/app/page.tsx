"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import KeyboardImage from "@/assets/IQUNIX AVER80 Mechanical Keyboard 1.png";
import KeyImage from "@/assets/Mechanical Keyboard Stickers for Sale 1.png";
import ColorImage from "@/assets/Zambumon on Instagram_ “Anyway, how’s your keyboard life @btaesthetics_⠀ _⠀ Keycaps_ GMK Handarbeit+⠀ Keyboard_ Polycarbonate Percent Canoe” 1.png";
import HeroImage from "@/assets/Zoom75 Collection 2.png";
import FirstImage from "@/assets/1.png";
import SecondImage from "@/assets/2.png";
import ThirdImage from "@/assets/3.png";
import FourthImage from "@/assets/4.png";
import FifthImage from "@/assets/5.png";
import SixthImage from "@/assets/6.png";
import SeventhImage from "@/assets/7.png";
import EighthImage from "@/assets/8.png";
import ProductCard from "@/components/Product";

type ProductKey = keyof typeof PRODUCTS;
export type Product = (typeof PRODUCTS)[ProductKey];
const PRODUCTS = {
  MKC65: {
    by: "MyKeyClub",
    price: 2500000,
    discountedPrice: 3500000,
    discount: 30,
    isNew: false,
  },
  JRIS75: {
    by: "MyKeyClub",
    price: 2500000,
    discountedPrice: 0,
    discount: 0,
    isNew: false,
  },
  ZOOM75: {
    by: "Meletrix",
    price: 1500000,
    discountedPrice: 3000000,
    discount: 50,
    isNew: false,
  },
  "Gateron Oil King": {
    by: "Gateron",
    price: 8000,
    discountedPrice: 0,
    discount: 0,
    isNew: true,
  },
  JRIS65: {
    by: "IrisLab",
    price: 2500000,
    discountedPrice: 3500000,
    discount: 30,
    isNew: false,
  },
  Web75: {
    by: "Team Web",
    price: 2500000,
    discountedPrice: 0,
    discount: 0,
    isNew: false,
  },
  Lolito80: {
    by: "Lolito Team Group",
    price: 7000000,
    discountedPrice: 14000000,
    discount: 50,
    isNew: false,
  },
  IRON65: {
    by: "Odin",
    price: 500000,
    discountedPrice: 0,
    discount: 0,
    isNew: true,
  },
};

function page() {
  return (
    <div>
      <div
        className="h-96 p-2 flex items-center bg-center bg-cover text-white md:px-24 md:justify-end md:h-[716px]"
        style={{
          backgroundImage: "url(/hero.png)",
        }}
      >
        <div className="max-w-base">
          <p className="font-semibold text-base mb-1">New Arrival</p>
          <h2 className="font-bold text-2xl mb-2 md:text-6xl md:max-w-lg">
            Discover Our New Collection
          </h2>
          <p className="font-medium text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Button className="font-bold">BUY NOW</Button>
        </div>
      </div>
      <div className="py-10 px-2 text-center md:py-12">
        <h2 className="font-bold text-xl">Browse The Range</h2>
        <p className="text-lg pb-10">
          Our keyboards, switches and keycaps all on your eyes
        </p>
        <Carousel className="px-20 relative">
          <CarouselContent>
            <CarouselItem className="md:basis-1/3">
              <div className="relative rounded-md aspect-[9/16] overflow-hidden">
                <Image src={ColorImage} alt="keyboard" layout="fill" />
              </div>
              <p className="font-semibold text-lg mt-4">Keycaps</p>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3">
              <div className="relative rounded-md aspect-[9/16] overflow-hidden">
                <Image src={KeyboardImage} alt="keyboard" layout="fill" />
              </div>
              <p className="font-semibold text-lg mt-4">Keyboard</p>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3">
              <div className="relative rounded-md aspect-[9/16] overflow-hidden">
                <Image src={KeyImage} alt="keyboard" layout="fill" />
              </div>
              <p className="font-semibold text-lg mt-4">Switches</p>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 md:hidden" />
          <CarouselNext className="absolute right-0 md:hidden" />
        </Carousel>
      </div>
      <div className="py-10 px-2 text-center md:py-12 md:px-20">
        <h2 className="font-bold text-2xl">Our Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-8 mt-10">
          {Object.keys(PRODUCTS).map((product, i) => {
            const data: Product = PRODUCTS[product as ProductKey];
            return <ProductCard key={i} data={data} product={product} />;
          })}
        </div>
        <Button
          variant="outline"
          className="border-primary text-primary mt-9"
          size="lg"
        >
          Show More
        </Button>
      </div>
      <div className="mt-[69px] bg-[#FCF8F3] h-[670px] flex items-center px-2 md:px-24 justify-between">
        <div className="w-[422px]">
          <h2 className="font-bold text-3xl">50+ Mechanical keyboards</h2>
          <p className="text-brand font-medium text-primary mb-4">
            Our designer already made a lot of beautiful custom keyboards that
            inspire you
          </p>
          <Button className="font-semibold">Explore Now</Button>
        </div>
        <div className="hidden lg:flex">
          <div className="relative">
            <Image src={HeroImage} alt="Keyboard product" />
            <div className="w-[217px] py-8 backdrop-blur-[32px] bg-white/60 absolute bottom-6 left-6">
              <div className="pr-4 ml-auto w-max">
                <p className="text-[#616161]">By ---- Meletrix</p>
                <p className="font-semibold text-[28px] mt-2 text-[#3A3A3A]">
                  ZOOM75
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 ml-32">
            <button className="bg-white w-12 h-12 rounded-full shadow-2xl"></button>
            <ChevronRight />
          </div>
        </div>
      </div>
      <div className="mt-[26px] text-center">
        <p className="text-brand font-semibold text-lg">
          Share your setup with
        </p>
        <h2 className="font-bold text-2xl">#ProjectTypoCrafter</h2>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 900: 4 }}
          className="mt-12"
        >
          <Masonry>
            <Image src={SeventhImage} alt="keyboard" />
            <Image src={FourthImage} alt="keyboard" />
            <Image src={FifthImage} alt="keyboard" />
            <Image src={FirstImage} alt="keyboard" />
            <Image src={EighthImage} alt="keyboard" />
            <Image src={ThirdImage} alt="keyboard" />
            <Image src={SixthImage} alt="keyboard" />
            <Image src={SecondImage} alt="keyboard" />
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}

export default page;
