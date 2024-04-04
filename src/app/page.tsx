"use client"

import Home from "./home/Home";
import ReduxProvider from "@/lib/redux-provider";

export default function LandingPage() {

  return (
    <ReduxProvider>
      <Home/>
    </ReduxProvider>
  );
}
