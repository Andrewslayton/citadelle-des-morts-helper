import Rune from "./components/rune";
import Raven from "./components/raven";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-8 p-8">
      <Rune />
      <Raven />
    </div>
  );
}