import React, {useEffect} from "react";
import "./App.scss";
import Main from "./containers/Main";
import {uiText} from "./portfolio";

function App() {
  useEffect(() => {
    document.documentElement.lang = uiText.language;
    document.title = uiText.seo.title;

    ["description", "og:description", "twitter:description"].forEach(name => {
      const selector = name.startsWith("og:") || name.startsWith("twitter:")
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      const meta = document.querySelector(selector);
      if (meta) {
        meta.setAttribute("content", uiText.seo.description);
      }
    });
  }, []);

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
