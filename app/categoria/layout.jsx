'use client';
import { QuioscoProvider } from "@/app/context/QuioscoProvider";

export default async function Layout({ children }) {
  return (
    <QuioscoProvider>
      {children}
    </QuioscoProvider>
  );
}
