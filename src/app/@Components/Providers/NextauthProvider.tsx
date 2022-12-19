"use client";

// https://github.com/nextauthjs/next-auth/issues/5664
import { SessionProvider } from "next-auth/react";
import { Toaster } from 'react-hot-toast';

export default function NextAuthProvider({ children }) {
  return (
    <>
      <SessionProvider>
        {children}
      </SessionProvider>
      <Toaster />
    </>
  );
}