import Image from "next/image";
import Navbar from "../components/navbar";
import Card from "../components/card";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <h1 class="text-center mt-10 text-2xl">Gör ditt val!</h1>
        <div className="flex flex-wrap flex-row justify-center mt-10">
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
}
