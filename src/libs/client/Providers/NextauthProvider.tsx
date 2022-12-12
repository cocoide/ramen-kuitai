"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

export default function NextAuthProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <SessionProvider>
        {children}
      </SessionProvider>
      <Toaster />
    </>
  );
}