'use client'; // Đánh dấu đây là Client Component

import { Button } from "@/components/ui/button";
import { ClerkLoaded, 
         ClerkLoading, 
         SignedIn,
         SignedOut,
         SignInButton,
         UserButton,
         useAuth } from "@clerk/nextjs"; // Import useAuth
import { Loader } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter
import { useEffect } from "react";

export const Header = () => {
    const router = useRouter(); // Khởi tạo useRouter
    const { isLoaded, isSignedIn } = useAuth(); // Lấy thông tin đăng nhập

    // Chuyển hướng khi người dùng đăng nhập
    useEffect(() => {
        if (isLoaded && isSignedIn) {
            router.push('/learn'); // Chuyển hướng đến /learn
        }
    }, [isLoaded, isSignedIn, router]);

    return (
        <header className="h-20 w-full border-b-2 border-slate-200 px-4">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/mascot.svg" height={40} width={40} alt="Mascot"/>
                    <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
                        Lingo
                    </h1>
                </div>
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/"/>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button size="lg" variant="ghost">
                                Login
                            </Button>
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>
            </div>
        </header>
    );
};