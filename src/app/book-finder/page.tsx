"use client";
import { Input } from "./components/input";

export default function BookFinder() {
  return (
    <div className="flex flex-col items-center justify-center pt-12">
      <div className="text-4xl font-black py-4">Book finder</div>
      <div className="text-2xl font-black py-4">Find your next favorite read.</div>
      <Input/>
    </div>
  );
}
