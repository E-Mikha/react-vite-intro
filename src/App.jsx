import Header from "./components/Header";
import WayToTech from "./components/WayToTech";
import Button from "./components/Button/Button";
import { useState } from "react";
import { ways } from "./data";

export default function App() {
  const [content, setContent] = useState("Нажми на кнопку");

  //let content = "Нажми на кнопку";

  function handleClick(type) {
    setContent(type);
    // content = type;
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

          <p>{content}</p>
        </section>
      </main>
    </div>
  );
}
