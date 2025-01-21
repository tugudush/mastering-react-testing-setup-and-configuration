import { describe, test, expect } from "vitest";
import {
  render,
  screen,
  // logRoles
} from "@testing-library/react";
import Random from "../Random";

describe("Random Component", () => {
  test("renders correctly", () => {
    //const { container } = render(<Random />);
    render(<Random />);
    screen.debug();
    //logRoles(container);
    const element = screen.getByText(/random/i);
    expect(element).toBeInTheDocument();
  });
});
