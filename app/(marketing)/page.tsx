'use client'; // Đánh dấu đây là Client Component


import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, SignUpButton, useAuth } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { isSignedIn } = useAuth();

  // Redirect if signed in
  useEffect(() => {
    if (isSignedIn) {
      router.push("/learn");
    }
  }, [isSignedIn, router]);

  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative mb-8 h-[240px] w-[240px] lg:mb-0 lg:h-[424px] lg:w-[424px]">
        <Image src="/hero.svg" fill alt="Hero" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Learn, practice and master new languages with Lingo.
        </h1>
        <div className="flex w-full max-w-[330px] flex-col items-center gap-y-3">
          <ClerkLoading>
            <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal">
                <Button size="lg" variant="secondary" className="w-full">
                  Get Started
                </Button>
              </SignUpButton>

              <SignInButton mode="modal">
                <Button size="lg" variant="primaryOutline" className="w-full">
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <Button size="lg" variant="secondary" className="w-full" asChild>
                <Link href="/learn">Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}