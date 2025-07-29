import { cleanup, render } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import ZmwBlank from "..";

afterEach(() => {
  cleanup();
});

test("渲染测试", () => {
  const { getByTestId } = render(<ZmwBlank />);
  expect(getByTestId("zmw-blank")).toBeTruthy();
});

test("display 测试", () => {
  const { queryByTestId } = render(<ZmwBlank display={false} />);
  expect(queryByTestId("zmw-blank")).toBeNull();
});

test("direction 测试", () => {
  const { getByTestId } = render(<ZmwBlank direction="horizontal" />);
  expect(getByTestId("zmw-blank").style.width).toBe("30px");
  expect(getByTestId("zmw-blank").style.height).toBe("");
});
