import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Framework7 from "framework7/framework7.esm.bundle";
import Framework7React from "framework7-react";
import "framework7/css/framework7.bundle.min.css";
import "framework7-icons/css/framework7-icons.css";
import "./typography.scss";
import "./theme.scss";
import * as serviceWorker from "./serviceWorker";
import ReactHelmet from "react-helmet";

Framework7.use(Framework7React);

ReactDOM.render(
  <React.StrictMode>
    <ReactHelmet>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-178536910-1"
      ></script>
      <script>
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-178536910-1');`}
      </script>
    </ReactHelmet>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
