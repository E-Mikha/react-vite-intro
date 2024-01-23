import Header from "./components/Header";
import WayToTech from "./components/WayToTech";
import Button from "./components/Button/Button";
import { ways } from "./data";

export default function App() {
  function handleClick(type) {
    console.log("button", type);
  }
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Our text for test</h3>

          <ul>
            <WayToTech {...ways[0]} />
            <WayToTech {...ways[1]} />
            <WayToTech {...ways[2]} />
            <WayToTech {...ways[3]} />
          </ul>
        </section>
        <section>
          <h3>Another text for test</h3>

          <Button onClick={() => handleClick("way")}>Подход</Button>
          <Button onClick={() => handleClick("easy")}>Доступность</Button>
          <Button onClick={() => handleClick("program")}>Концентрация</Button>

          <p>Нажми на кнопку</p>
        </section>
      </main>
    </div>
  );
}
