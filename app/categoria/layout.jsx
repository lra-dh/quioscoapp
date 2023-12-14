'use client';
import { QuioscoProvider } from "@/app/context/QuioscoProvider";

export default function Layout({ children }) {

  return (
    <QuioscoProvider>
      {children}
    </QuioscoProvider>
  );
}
