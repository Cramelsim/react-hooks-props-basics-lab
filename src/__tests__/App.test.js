import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'; 
import App from "../components/App";

const user = {
  name: "Liza",
  city: "New York",
  color: "red",
};6

test("passes 'name', 'city', and 'color' to <Home> as props", () => {
  render(<App />);
  const h1 = screen.getByText(`${user.name} is a Web Developer from ${user.city}`);
  expect(h1).toBeInTheDocument();
  expect(h1).toHaveStyle({ color: user.color });
});


