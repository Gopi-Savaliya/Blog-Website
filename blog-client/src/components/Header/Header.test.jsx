import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

beforeEach(() => {
  render(<Header />);
});

test("should render small and large title", () => {
  expect(screen.getByText(/Welcome To The/i)).toBeInTheDocument();
  expect(screen.getByText(/Blog/i)).toBeInTheDocument();
});

test("should render header image", () => {
  expect(
    screen.getByRole("img", {
      name: /HeaderImage/i,
    })
  ).toBeInTheDocument();
});
