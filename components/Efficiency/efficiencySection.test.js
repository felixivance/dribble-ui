import { render, screen } from "@testing-library/react";
import EfficiencySection from "./EfficiencySection";
import "@testing-library/jest-dom";
import React from "react";

describe("EfficiencySection Component", () => {
  it("renders without crashing", () => {
    render(<EfficiencySection />);
    expect(screen.getByText("Maximize")).toBeInTheDocument();
    expect(screen.getByText("efficiency")).toBeInTheDocument();
    expect(screen.getByText("with our intuitive")).toBeInTheDocument();
    expect(screen.getByText("45%")).toBeInTheDocument();
    expect(screen.getByText("System grow faster")).toBeInTheDocument();
    expect(screen.getByText("Analytics")).toBeInTheDocument();
    expect(screen.getByText("server")).toBeInTheDocument();
  });
});
