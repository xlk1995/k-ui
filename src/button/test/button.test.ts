import { render } from "@testing-library/vue";
import Button from "../src/button";

// base功能
test("button should", () => {
  const { getByRole } = render(Button);
  getByRole("button");
});

// test slots
test("default slots should be work", () => {
  const { getByText } = render(Button);
  getByText("按钮");
});

test("slots should be work", () => {
  const { getByText } = render(Button, {
    slots: {
      default: "comfirm",
    },
  });
  getByText("comfirm");
});

test("default type  secondary should be work", () => {
  const { getByRole } = render(Button);
  const button = getByRole("button");
  expect(button.classList.contains("s-btn--secondary")).toBe(true);
});

test("type should be work", () => {
  const { getByRole } = render(Button, {
    props: {
      type: "primary",
    },
  });
  const button = getByRole("button");
  expect(button.classList.contains("s-btn--primary")).toBe(true);
});
