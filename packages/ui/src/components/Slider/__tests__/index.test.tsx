import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import ZmwSlider from "..";

const imageUrls = [
  "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
  "https://vitejs.dev/logo.svg",
  "https://vitest.dev/logo.svg",
];

describe("基本算子", () => {
  test("1+1=2", () => {
    expect(1 + 1).toBe(2);
    expect(true).toBeTruthy();
  });
});

describe("测试", () => {
  test("基础渲染", () => {
    const { getByRole } = render(<ZmwSlider />);
    expect(getByRole("img")).toBeInTheDocument();
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
    expect(image?.src).toBe(
      "https://img2.baidu.com/it/u=1866901050,3656383769&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    );
  });
});
