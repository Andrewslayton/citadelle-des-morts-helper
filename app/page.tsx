import Rune from "./components/rune";
import Raven from "./components/raven";
import Pages from "./components/forgottenPages";


export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-8 p-8 lg:grid-cols-3">
      <Rune />
      <Pages />
      <Raven />
    </div>
  );
}