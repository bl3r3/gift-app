import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGif } from "../../src/hooks/useFetchGif";

jest.mock("../../src/hooks/useFetchGif");

describe("Test in <GifGrid /> component", () => {
  const category = "One punch";

  it("debe de mostrar el loading inicialmente", () => {
    useFetchGif.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText("Loading..."));
    expect(screen.getByText(category));
  });

  it("debe de mostrar items cuando carga", () => {
    const gifs = [
      {
        id: "1",
        title: "Saitama",
        url: "https://localhost/saitama.jpg",
      },
      {
        id: "2",
        title: "Rick",
        url: "https://localhost/rick.jpg",
      },
    ];

    useFetchGif.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });

  it("Debe hacer match con el snapshot", () => {
    const { container } = render(<GifGrid category={category} />);
    expect(container).toMatchSnapshot();
  });
});
