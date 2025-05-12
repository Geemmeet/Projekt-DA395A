import Image from "next/image";
import Navbar from "../components/navbar";
import Card from "../components/card";
import Reload from "../components/reloadbtn";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap flex-row justify-center items-center mt-10">
        <Card />
        <Reload />
        <Card />
      </div>
    </div>
  );
}
