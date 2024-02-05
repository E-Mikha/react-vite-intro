import WayToTech from "./WayToTech";
import { ways } from "../data";

export default function TeachingSection() {
  return (
    <section>
      <h3>Our text for test</h3>

      <ul>
        {ways.map((way) => (
          <WayToTech key={way.title} {...way} />
        ))}
      </ul>
    </section>
  );
}
