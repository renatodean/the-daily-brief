import Image from "next/image";
import Logo from "./components/logo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Logo width={120} height={120} />
    </main>
  );
}
