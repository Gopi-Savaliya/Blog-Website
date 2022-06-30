import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";
import { MemoryRouter } from "react-router";
import { Context } from "../../context/Context";

const value = {
  dispatch: jest.fn(),
  user: {
    _id: 123,
    username: "John",
    email: "john@gmail.com",
    profilePic: "",
  },
  isFetching: false,
  error: false,
};

beforeEach(() => {
  render(
    <Context.Provider value={value}>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </Context.Provider>
  );
});

test("should render app logo in the navbar", () => {
  expect(
    screen.getByRole("img", {
      name: /Blog App/i,
    })
  ).toBeInTheDocument();
});

test("should render list of links in the navbar", () => {
  expect(screen.getByText(/HOME/i)).toBeInTheDocument();
  expect(screen.getByText(/WRITE/i)).toBeInTheDocument();
  if (value.user) expect(screen.getByText(/LOGOUT/i)).toBeInTheDocument();
  if (!value.user) {
    expect(screen.getByText(/REGISTER/i)).toBeInTheDocument();
    expect(screen.getByText(/LOGIN/i)).toBeInTheDocument();
  }
});

test("should render profile photo in the navbar if user is logged in", () => {
  expect(
    screen.getByRole("img", {
      name: /Profile/i,
    })
  ).toBeInTheDocument();
});

test("should render search button in the navbar", () => {
  expect(screen.getByRole("search")).toBeInTheDocument();
});
