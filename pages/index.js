import React from "react";
import Document from "./documnent";
import Navbar from "./components/Navbar";
import LandingFandom from "./components/LandingFandom";
import LandingHangingOut from "./components/LandingHangingOut";
import LandingInviteOnly from "./components/LandingInviteOnly";
import LandingMain from "./components/LandingMain";
import LandingRelibleTech from "./components/LandingRelibleTech";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className=" overflow-hidden">
        <Document />
        <Navbar />
        <LandingMain />
        <LandingInviteOnly/>
        <LandingHangingOut/>
        <LandingFandom/>
        <LandingRelibleTech />
        <Footer />
      </div>
    </>
  );
}
