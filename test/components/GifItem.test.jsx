import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Test in <GifItem /> component", () => {
  const title = "Saitama";
  const url =
    "https://media0.giphy.com/media/l3vRlt8kty8KKeHni/giphy.gif?cid=0e5a01445twqid0e3ylp7cuvb13r00q9884b8x1d01mp78ib&ep=v1_gifs_search&rid=giphy.gif&ct=g";

  it("debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  it("debe de mostrat la imagen con el URL y ALT indicado", () => {
    render(<GifItem title={title} url={url} />);
    // expect(screen.getByRole("img").src).toBe(url);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  it("debe de mostrar el titulo en el component", () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
