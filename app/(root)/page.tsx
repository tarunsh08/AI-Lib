'use client'

import { useState, useEffect } from "react";
import ChatProviders from "../../components/ChatProviders";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section>
        
      </section>
      <ChatProviders />
    </>
  );
}