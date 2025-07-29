import { cleanup, render } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import ZmwVideo from "..";

afterEach(() => {
  cleanup();
});

test("渲染测试", () => {
  const { getByTestId } = render(<ZmwVideo />);
  expect(getByTestId("zmw-video")).toBeTruthy();
});
