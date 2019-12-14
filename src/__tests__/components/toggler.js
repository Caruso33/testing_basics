import Toggler from "../../components/toggler.jsx";
import { render } from "@testing-library/react";

describe("Toggler Func component", () => {
  test("should render with default props", () => {
    const component = <Toggler onToggle={jest.fn()}>Child</Toggler>;

    const wrapper = render(component);
    const { baseElement } = wrapper;
    expect(baseElement).toMatchSnapshot();
  });
});
