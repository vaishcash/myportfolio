import AboutMe from "@/components/About";

import Experiences from "@/components/Experiences";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

async function waitForSeconds(seconds: number) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

export default async function App() {
  await waitForSeconds(5);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Home />
      <AboutMe />
      <Experiences />
    </Suspense>
  );
}
