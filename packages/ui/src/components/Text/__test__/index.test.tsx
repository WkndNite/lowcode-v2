import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { DEFAULT_TEXT } from "@/configs";
import ZmwText from "..";

test("渲染", () => {
  const { getByText } = render(<ZmwText />);
  expect(getByText(DEFAULT_TEXT)).toBeTruthy();
});
