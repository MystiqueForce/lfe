
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// theme
import ThemeProvider from "./theme";
// components
import { StyledChart } from "./components/chart";
import ScrollToTop from "./components/scroll-to-top";
import { AppRouter } from "./routes";

function App() {
  const pathname = window.location.pathname;

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      default:
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
    <BrowserRouter>
      <HelmetProvider>
        <ThemeProvider>
          <ScrollToTop />
          <StyledChart />
          <AppRouter/>
        </ThemeProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
