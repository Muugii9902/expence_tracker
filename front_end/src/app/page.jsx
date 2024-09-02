import Image from "next/image";
import LogIn from "./components/login";
import Load from "./components/load";

export default function Home() {
  return (
    <main className="w-full h-screen bg-slate-400">
      <Load />
    </main>
  );
}
