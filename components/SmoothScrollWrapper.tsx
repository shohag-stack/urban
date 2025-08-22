"use client";
import { ReactLenis, useLenis } from 'lenis/react';
import { ReactNode } from 'react';

export default function SmoothScrollWrapper({ children }: { children: ReactNode }) {
  useLenis((lenis) => {
    console.log(lenis);
  });

  return <ReactLenis root>{children}</ReactLenis>;
}