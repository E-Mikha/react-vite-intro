import Header from "./components/Header";
import WayToTech from "./components/WayToTech";
import Button from "./components/Button/Button";
import { useState } from "react";
import { ways, differences } from "./data";

export default function App() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
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

          <Button
            isActive={contentType === "way"}
            onClick={() => handleClick("way")}
          >
            Подход
          </Button>
          <Button
            isActive={contentType === "easy"}
            onClick={() => handleClick("easy")}
          >
            Доступность
          </Button>
          <Button
            isActive={contentType === "program"}
            onClick={() => handleClick("program")}
          >
            Концентрация
          </Button>

          {/* {contentType ? (
            <p>{differences[contentType]}</p>
          ) : (
            <p>Нажми на кнопку</p>
          )} */}

          {!contentType && <p>Нажми на кнопку</p>}
          {contentType && <p>{differences[contentType]}</p>}
        </section>
      </main>
    </div>
  );
}
