"use client";
import HeroImage from "@/assets/image 14.png";
import RandomImage from "@/assets/image 30.png";
import Image from "next/image";
import React, { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

function Page() {
  const router = useRouter();
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    try {
      const username = usernameInputRef.current?.value;
      const querySnapshot = await getDocs(collection(db, "users"));
      const user = querySnapshot.docs.find((doc) => doc.data().username === username);
      if (user) {
        const userData = user.data();
        if (userData.password === passwordInputRef.current?.value) {
          router.replace("/")
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className="relative w-full h-36 md:h-48 text-white">
        <Image src={HeroImage} layout="fill" alt="hero" objectFit="cover" />,
        <div className="absolute top-1/2 right-1/2 font-medium translate-x-1/2 -translate-y-1/2">
          <h2 className="text-5xl">Login</h2>
        </div>
      </div>
      <div className="mb-40">
        <Image src={RandomImage} alt="" width={250} className="relative -top-6 mx-auto"/>
        <div className="max-w-sm mx-auto text-center">
          <Input placeholder="Email" className="mt-4" ref={usernameInputRef}/>
          <Input placeholder="Password" type="password" className="mt-4" ref={passwordInputRef}/>
          <Button className="mt-4" onClick={handleSubmit}>Login</Button>
        </div>
      </div>
    </div>
  );
}

export default Page;
