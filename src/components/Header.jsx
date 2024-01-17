import logo from "/logo-name.svg";

export default function Header() {
  const now = new Date();

  return (
    <header>
      <img src={logo} alt={"logo"} />
      {/* <h3>Front-End</h3> */}

      <span>Time now: {now.toLocaleTimeString()}</span>
    </header>
  );
}
