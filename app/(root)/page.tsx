'use client'

import HeroSection from "@/components/landing/hero";
import ChatProviders from "../../components/ChatProviders";
import AIInput_01 from "@/components/eatechUI/ai-input/ai-input-01";
import AIInput_02 from "@/components/eatechUI/ai-input/ai-input-02";
import AIInputMinimal from "@/components/eatechUI/ai-input/ai-input-03";
import AIInputEmoji from "@/components/eatechUI/ai-input/ai-input-04";
import AIInputAdvanced from "@/components/eatechUI/ai-input/ai-input-05";

export default function Home() {

  return (
    <>
      <main className="bg-white dark:bg-black/5 overflow-x-hidden">
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen px-6 lg:px-4 gap-4 sm:gap-12">
          <HeroSection />
        </div>
        <AIInput_01 />
        <AIInput_02 />
        <AIInputMinimal />
        <AIInputEmoji />
        <AIInputAdvanced/>
      </main>
      <ChatProviders />
    </>
  );
}