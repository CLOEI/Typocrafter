import React from "react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <div className="flex items-center justify-between p-2 h-12 bg-primary md:h-20 md:px-14">
      <h1 className="font-montserrat font-bold  md:text-3xl">TypoCrafter</h1>
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="md:hidden" variant="ghost" size="icon">
            <Menu size={24} />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="p-4 space-y-2">
            <p className="font-bold">Go to</p>
            <div className="flex space-x-1 text-primary-foreground font-semibold">
              <Link href="/" className="px-2 bg-primary rounded-sm">
                Home
              </Link>
              <Link href="/shop" className="px-2 bg-primary rounded-sm">
                Shop
              </Link>
              <Link href="/blog" className="px-2 bg-primary rounded-sm">
                Blog
              </Link>
              <Link href="/contact" className="px-2 bg-primary rounded-sm">
                Contact
              </Link>
            </div>
            <p className="font-bold">Actions</p>
            <div className="flex space-x-1">
              <Link href="/user">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary"
                >
                  <User />
                </Button>
              </Link>
              <Link href="/shop?search=''">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary"
                >
                  <Search />
                </Button>
              </Link>
              <Link href="/wishlist">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary"
                >
                  <Heart />
                </Button>
              </Link>
              <Link href="/cart">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary"
                >
                  <ShoppingCart />
                </Button>
              </Link>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
      <div className="hidden md:flex">
        <div className="flex space-x-10 mr-20">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="space-x-8 flex">
          <Search />
          <Link href="/wishlist">
            <Heart />
          </Link>
          <Link href="/cart">
            <ShoppingCart />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
