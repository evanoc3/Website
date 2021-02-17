if (process.env.NODE_ENV==='development') {
  require("preact/debug");
}

import { h, render } from "preact";
import LandingPage from "/components/LandingPage";


render(<LandingPage />, document.body);