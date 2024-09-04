import { useState } from "react";

import HelpArea from "./HelpArea";

function MainContent() {
  const [helpVisible, setHelpVisible] = useState(false);

  function toggleHelp() {
    setHelpVisible((isVisible) => !isVisible);
  }

  // 커밋 테스트
  return (
    <main>
      <button onClick={toggleHelp}>{helpVisible ? "Hide" : "Show"} Help</button>
      {helpVisible && <HelpArea />}
    </main>
  );
}

export default MainContent;
