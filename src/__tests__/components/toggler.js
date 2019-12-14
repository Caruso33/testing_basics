import Toggler, { Toggle } from "../../components/toggler.jsx";
import { render, fireEvent } from "@testing-library/react";

describe("Toggler Func Component", () => {
  test("should render with default props", () => {
    const wrapper = renderToggler();
    const { container } = wrapper;
    expect(container).toMatchSnapshot();
    // expect(container)
  });

  test("shows changed value on input", async () => {
    const inputValue = "abc";

    const wrapper = renderToggler();
    const { findByTestId } = wrapper;
    const input = await findByTestId("input");

    fireEvent.change(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
  });
});

describe("Toggle Button Component", () => {
  test("should render with initialToggle true", () => {
    const wrapper = renderToggle({ initialToggledOn: true });
    const { container } = wrapper;
    expect(container).toMatchSnapshot();
    // expect(container)
  });

  test("on onToggleFunction is called when button is clicked", async () => {
    const onToggle = jest.fn();

    const wrapper = renderToggle({ onToggle });

    const { findByTestId } = wrapper;
    const button = await findByTestId("button");

    expect(button).toMatchSnapshot("1. Before toggle");
    fireEvent.click(button);
    expect(button).toMatchSnapshot("2. After toggle");
    expect(onToggle).toHaveBeenCalledTimes(1);
  });
});

function renderToggler(props = {}) {
  const propsToUse = {
    onToggle() {},
    children: "Child",
    ...props
  };

  return render(<Toggler {...propsToUse} />);
}

function renderToggle(props = {}) {
  const propsToUse = {
    onToggle() {},
    children: "Child",
    ...props
  };

  return render(<Toggle {...propsToUse} />);
}
