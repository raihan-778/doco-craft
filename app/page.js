import { Header } from "./components/Header";
import Landing from "./components/Landing";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <Landing />
    </div>
  );
}
