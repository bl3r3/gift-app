import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Test en <GifExpertApp />", () => {
  it("Match to snapshot", () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });

  it("Render Title app", () => {
    render(<GifExpertApp />);
    expect(screen.getByText("GifExpertApp"));
  });
});
