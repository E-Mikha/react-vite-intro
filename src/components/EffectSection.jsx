import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export default function EffectSection() {
  function openModal() {}

  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={openModal}>Открыть информацию</Button>

      <Modal>
        <h3>Hello from Modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          dolores accusamus exercitationem temporibus fuga vitae minus cumque
          alias aperiam, necessitatibus quo numquam saepe asperiores tenetur!
          Fugiat, sapiente quis. Sed, veniam?
        </p>
      </Modal>
    </section>
  );
}
