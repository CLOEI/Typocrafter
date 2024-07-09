"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import HeroImage from "@/assets/image 19.png";
import { Input } from "@/components/ui/input";
import useLocalStorage from "@/lib/useLocalStorage";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

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
                <BreadcrumbPage className="text-slate-100">
                  Checkout
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h2 className="font-semibold text-3xl">Billing details</h2>
            <div className="flex gap-2">
              <div>
                <p>First Name</p>
                <Input />
              </div>
              <div>
                <p>Last Name</p>
                <Input />
              </div>
            </div>
            <div>
              <p>Company Name ( Optional )</p>
              <Input />
            </div>
            <div>
              <p>Country / Region</p>
              <Input />
            </div>
            <div>
              <p>Street Address</p>
              <Input />
            </div>
            <div>
              <p>Town / city</p>
              <Input />
            </div>
            <div>
              <p>Province</p>
              <Input />
            </div>
            <div>
              <p>ZIP Code</p>
              <Input />
            </div>
            <div>
              <p>Phone</p>
              <Input />
            </div>
            <div>
              <p>Email address</p>
              <Input />
            </div>
            <Input placeholder="Additional information" className="my-10" />
          </div>
          <div>
            <div className="flex justify-between font-semibold">
              <p>Product</p>
              <p>Subtotal</p>
            </div>
            {cart.map((item: any, i: number) => (
              <div key={i} className="flex justify-between">
                <p>ZOOM75 V2</p>
                <p>x {item.quantity}</p>
                <p>Rp. 2.500.000,00</p>
              </div>
            ))}
            <div className="flex justify-between mb-4">
              <p>Total</p>
              <p className="font-semibold text-md">{getTotal()}</p>
            </div>
            <Separator />
            <p className="mt-2">Direct Bank Transfer</p>
            <p>
              Make your payment directly into our bank account. Please use your
              Tag ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <div className="my-2">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full border-black border-2"></div>
                <p>Direct Bank Transfer</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full border-black border-2"></div>
                <p>Credit / Debit</p>
              </div>
            </div>
            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <span className="font-medium">privacy policy</span>.
            </p>
            <Button variant="outline" className="ml-auto flex mt-2" size="lg">
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
