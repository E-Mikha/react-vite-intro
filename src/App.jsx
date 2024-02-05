import DifferencesSection from "./components/DifferencesSection";
import Header from "./components/Header";
import FunctionIntroSection from "./components/IntroSection";
import TeachingSection from "./components/TeachingSection";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <FunctionIntroSection />
        <TeachingSection />
        <DifferencesSection />
      </main>
    </>
  );
}
