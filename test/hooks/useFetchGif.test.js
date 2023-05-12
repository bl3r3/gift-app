import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGif } from "../../src/hooks/useFetchGif";

describe("Pruebas en Hooks useFetchGif", () => {
  it("Debe de regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGif("one punch"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  it("Debe de mostrar un arreglo de imagenes y el isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGif("one punch"));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
