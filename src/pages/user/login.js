import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header/header";
import Login from "@/interfaces/login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <Login />
      </main>
    </>
  );
}
