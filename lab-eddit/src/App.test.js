import React from "react";
import App from "./App";
import { render } from "../src/test-utils/customRender.js"

test("Teste 1 - renderiza app", () => {
  render(<App />)
});