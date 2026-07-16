import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App smoke test", () => {
  it("renders the main portfolio content", () => {
    render(<App />);

    expect(screen.getByRole("banner")).toBeTruthy();
    expect(screen.getByRole("heading", { name: /Arun Vasudev C/i })).toBeTruthy();
    expect(screen.getByText(/Mechanical Engineering Student \| Aspiring Aerospace Design Engineer/i)).toBeTruthy();
    expect(screen.getByRole("button", { name: /toggle color theme/i })).toBeTruthy();
  });
});
