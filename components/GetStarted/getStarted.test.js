import { render, screen } from "@testing-library/react";
import GetStarted from "./GetStarted";
import "@testing-library/jest-dom";
import React from "react";

describe("GetStarted Component", () => {
  it("renders without crashing", () => {
    render(<GetStarted />);
    expect(screen.getByText("Get started")).toBeInTheDocument();
    expect(
      screen.getByText("Turn information into advantage! Start using")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Ramos today. Sign up for a free trial.")
    ).toBeInTheDocument();
    expect(screen.getByText("Request a demo")).toBeInTheDocument();
    expect(screen.getByText("start for free")).toBeInTheDocument();
  });
});
