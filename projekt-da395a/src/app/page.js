import Image from "next/image";
import Navbar from "../components/navbar";
import Card from "../components/card";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap flex-row justify-center mt-10">
        <Card />
        <Card />
      </div>
    </div>
  );
}
