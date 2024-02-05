import { useState } from "react";
import DifferencesSection from "./components/DifferencesSection";
import FeedbackSection from "./components/FeedbackSection";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import TeachingSection from "./components/TeachingSection";

export default function App() {
  const [tab, setTab] = useState();

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection />

        {tab === "main" && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}

        {tab === "feedback" && <FeedbackSection />}
      </main>
    </>
  );
}
