"use client"

import Home from "./home/Home";
import ReduxProvider from "@/redux/redux-provider";

export default function LandingPage() {

  return (
    <ReduxProvider>
      <Home/>
    </ReduxProvider>
  );
}
