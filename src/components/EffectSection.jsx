import { useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export default function EffectSection() {
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }

  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={openModal}>Открыть информацию</Button>

      <Modal open={modal}>
        <h3>Hello from Modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          dolores accusamus exercitationem temporibus fuga vitae minus cumque
          alias aperiam, necessitatibus quo numquam saepe asperiores tenetur!
          Fugiat, sapiente quis. Sed, veniam?
        </p>
        <Button onClick={() => setModal(false)}>Close modal</Button>
      </Modal>
    </section>
  );
}
