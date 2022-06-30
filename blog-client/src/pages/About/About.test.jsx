import { render, screen } from "@testing-library/react";
import { Context } from "../../context/Context";
import { MemoryRouter } from "react-router-dom";
import { About } from "./About";

const value = {
  dispatch: jest.fn(),
  user: {
    _id: 123,
    username: "Jane",
    email: "jane@gmail.com",
    profilePic: "",
  },
  isFetching: false,
  error: false,
};

beforeEach(() => {
  render(
    <Context.Provider value={value}>
      <MemoryRouter>
        <About />
      </MemoryRouter>
    </Context.Provider>
  );
});

test("should render profile photo", () => {
  expect(
    screen.getByRole("img", { name: /Profile Photo/i })
  ).toBeInTheDocument();
});

test("should render username", () => {
  expect(screen.getByText(value.user.username)).toBeInTheDocument();
});

test("should render email address", () => {
  expect(screen.getByText(value.user.email)).toBeInTheDocument();
});

test("should render about me description", () => {
  expect(screen.getByTestId("UserDescription")).toBeInTheDocument();
});
