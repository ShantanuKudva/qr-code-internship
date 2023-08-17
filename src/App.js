import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop10 from "./pages/Desktop10";
import Desktop9 from "./pages/Desktop9";
import Desktop12 from "./pages/Desktop12";
import Desktop15 from "./pages/Desktop15";
import Desktop14 from "./pages/Desktop14";
import Desktop11 from "./pages/Desktop11";

import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/customer-info":
        title = "";
        metaDescription = "";
        break;
      case "/preview":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-15":
        title = "";
        metaDescription = "";
        break;
      case "/module-selector":
        title = "";
        metaDescription = "";
        break;
      case "/license-details":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-151":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Desktop9 />} />
      <Route path="/license-type" element={<Desktop10 />} />
      <Route path="/preview" element={<Desktop12 />} />
      <Route path="/selected-modules" element={<Desktop15 />} />
      <Route path="/module-selector" element={<Desktop14 />} />
      <Route path="/license-details" element={<Desktop11 />} />
    </Routes>
  );
}
export default App;
