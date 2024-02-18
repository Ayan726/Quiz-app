"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const HomePageContent = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <form className="space-y-3">
      <Input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Enter your email..."
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          if (!validateEmail(email)) {
            toast({
              title: "Uh oh! Something went wrong.",
              description: "Email is missing or not a valid email.",
              variant: "destructive",
            });
            return;
          }
          router.push("/quiz");
        }}
        type="submit"
      >
        Put some load on your brain
        <ArrowRightIcon className="ml-1" />
      </Button>
    </form>
  );
};

export default HomePageContent;
