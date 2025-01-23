import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../components/About";
import '@testing-library/jest-dom'; 


const links = {
  github: "https://github.com/liza",
  linkedin: "https://www.linkedin.com/in/liza/",
};

test("renders a <p> element with the bio from props", () => {
  render(<About bio="I love to code" links={links} />);
  const bio = screen.getByText("I love to code");
  expect(bio).toBeInTheDocument();
});
test("does not render a <p> element if the bio is not included in props", () => {
  const { container } = render(<About links={links} />);
  expect(container.querySelector("p")).toBeNull();
});

test("does not render a <p> element if the bio is an empty string", () => {
  const { container } = render(<About bio="" links={links} />);
  expect(container.querySelector("p")).toBeNull();
});
