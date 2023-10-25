import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop3 from "./pages/Desktop3";
import Registration from "./pages/Registration";
import Desktop2 from "./pages/Desktop2";
import Desktop1 from "./pages/Desktop1";
import AndroidLarge2 from "./pages/AndroidLarge2";

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
      case "/registration":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-2":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-1":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-2":
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
      <Route path="/" element={<Desktop3 />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/desktop-2" element={<Desktop2 />} />
      <Route path="/desktop-1" element={<Desktop1 />} />
      <Route path="/android-large-2" element={<AndroidLarge2 />} />
    </Routes>
  );
}
export default App;
