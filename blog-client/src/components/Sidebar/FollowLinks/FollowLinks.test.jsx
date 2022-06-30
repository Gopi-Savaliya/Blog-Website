import { render, screen } from "@testing-library/react";
import { FollowLinks } from "./FollowLinks";

beforeEach(() => {
  render(<FollowLinks />);
});

test("should render Follow Links title", () => {
  expect(screen.getByText(/Follow Us/i)).toBeInTheDocument();
});

test("should render about me image", () => {
  expect(screen.getByTestId("FacebookLink")).toBeInTheDocument();
  expect(screen.getByTestId("TwitterLink")).toBeInTheDocument();
  expect(screen.getByTestId("PiterestLink")).toBeInTheDocument();
  expect(screen.getByTestId("InstagramLink")).toBeInTheDocument();
});
