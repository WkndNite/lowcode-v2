import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { DEFAULT_FALLBACK_IMAGE } from "@/configs";
import ZmwSlider from "..";

const imageUrls = [
  "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
  "https://vitejs.dev/logo.svg",
  "https://vitest.dev/logo.svg",
];

test("渲染测试", () => {
  const { getByRole } = render(<ZmwSlider />);
  expect(getByRole("img")).toBeTruthy();
});

test("src 测试", () => {
  const { container } = render(<ZmwSlider src={imageUrls} />);
  const images = container.querySelectorAll("img");
  expect(images.length).toBe(imageUrls.length * 2 + 1);
  for (let i = 1; i <= imageUrls.length; i++) {
    expect(images[i].src).toContain(imageUrls[i - 1]);
  }
});

test("fallback 测试", () => {
  const { container } = render(<ZmwSlider src={["https://error.png"]} />);
  const image = container.querySelector("img");

  image?.dispatchEvent(new Event("error"));
  expect(image?.src).toBe(DEFAULT_FALLBACK_IMAGE);
});

test("link 测试", () => {
  const { container } = render(
    <ZmwSlider src={imageUrls} link="https://vitejs.dev/" />,
  );
  const a = container.querySelector("a");
  expect(a).toBeTruthy();
  expect(a?.href).toBe("https://vitejs.dev/");
});

test("display 测试", () => {
  const { queryByTestId } = render(<ZmwSlider display={false} />);
  expect(queryByTestId("zmw-slider")).toBeNull();
});
