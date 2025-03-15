import { useState } from "react";
import DesktopApp from "./DesktopApp";
import MobileApp from "./MobileApp";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  addEventListener("resize", (_) => {
    setWindowWidth(window.innerWidth);
  });

  if (windowWidth >= 1280) {
    return <DesktopApp />;
  } else {
    return <MobileApp />;
  }
}

export default App;
