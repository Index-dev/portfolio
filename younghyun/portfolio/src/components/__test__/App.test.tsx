import React from "react";
import { render } from "@testing-library/react";
import App from "components/App";

describe("App", () => {
  test("check hello world", () => {
    const { container } = render(<App />);
    expect(container).toHaveTextContent("Hello world");
  });
});
