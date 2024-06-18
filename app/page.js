"use client"
import { useState } from "react";
import Header from "./components/Header/Header";
import Toggle from "./components/Toggle/Toggle";
import OverRay from "./components/OverRay/OverRay";

export default function Home() {
  const [isOpen,setIsOpen]=useState(false)
  const doClick=()=>{
    setIsOpen(prev=>!prev)
  }
  const doNone=()=>{
    return
  }
  return (
    <main>
      <OverRay isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Toggle isOpen={isOpen}/>
    </main>
  );
}
