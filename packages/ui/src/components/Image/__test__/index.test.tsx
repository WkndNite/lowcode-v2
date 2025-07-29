import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import { DEFAULT_FALLBACK_IMAGE } from "@/configs";
import ZmwImage from "..";

afterEach(() => {
  cleanup();
});

test("渲染测试", () => {
  const { getByTestId } = render(<ZmwImage />);
  expect(getByTestId("zmw-image")).toBeTruthy();
});

test("src 测试", () => {
  const { container } = render(<ZmwImage src="https://vitejs.dev/logo.svg" />);

  const img = container.querySelector("img") as HTMLImageElement;
  expect(img?.getAttribute("src")).toBe("https://vitejs.dev/logo.svg");
});

test("fallback 测试", async () => {
  const { container } = render(
    <ZmwImage src="https://broken-image.com/img.png" />,
  );

  const img = container.querySelector("img") as HTMLImageElement;
  fireEvent.error(img);

  await waitFor(() => {
    expect(img?.getAttribute("src")).toBe(DEFAULT_FALLBACK_IMAGE);
  });
});

test("link 测试", () => {
  const { container } = render(
    <ZmwImage src="https://vitejs.dev/logo.svg" link="https://vitejs.dev/" />,
  );
  const a = container.querySelector("a");
  expect(a).toBeTruthy();
  expect(a?.href).toBe("https://vitejs.dev/");
});

test("display 测试", () => {
  const { queryByTestId } = render(<ZmwImage display={false} />);
  expect(queryByTestId("zmw-image")).toBeNull();
});
