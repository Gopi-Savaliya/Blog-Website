import { fireEvent, render, screen } from "@testing-library/react";
import { Login } from "./Login";
import { MemoryRouter } from "react-router";
import axios from "axios";
import { Context } from "../../context/Context";

jest.mock("axios");
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
        <Login />
      </MemoryRouter>
    </Context.Provider>
  );
});

test("should render login title", () => {
  expect(screen.getByTestId("LoginTitle")).toBeInTheDocument();
});

test("should render email field", () => {
  expect(screen.getByText(/Username/i)).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText(/Enter your username.../i)
  ).toBeInTheDocument();
});

test("should render password field", () => {
  expect(screen.getByText(/Password/i)).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText(/Enter your password.../i)
  ).toBeInTheDocument();
});

test("should render login button", () => {
  expect(screen.getByRole("button", { name: /Login/i })).toBeInTheDocument();
});

test("should login user on login button click", async () => {
  fireEvent.click(screen.getByRole("button", { name: /Login/i }));
  await axios.post.mockResolvedValue();
  expect(axios.post).toHaveBeenCalledTimes(1);
});

test("should render register button link", () => {
  expect(screen.getByRole("button", { name: /Register/i })).toBeInTheDocument();
});
