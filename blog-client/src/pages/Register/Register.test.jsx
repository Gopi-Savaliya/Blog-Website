import { fireEvent, render, screen } from "@testing-library/react";
import { Register } from "./Register";
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
        <Register />
      </MemoryRouter>
    </Context.Provider>
  );
});

test("should render register title", () => {
  expect(screen.getByTestId("RegisterTitle")).toBeInTheDocument();
});

test("should render username field", () => {
  expect(screen.getByText(/Username/i)).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText(/Enter your username.../i)
  ).toBeInTheDocument();
});

test("should render email field", () => {
  expect(screen.getByText(/Email/i)).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText(/Enter your email.../i)
  ).toBeInTheDocument();
});

test("should render password field", () => {
  expect(screen.getByText(/Password/i)).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText(/Enter your password.../i)
  ).toBeInTheDocument();
});

test("should render register button", () => {
  expect(screen.getByRole("button", { name: /Register/i })).toBeInTheDocument();
});

test("should register user on register button click", async () => {
  fireEvent.click(screen.getByRole("button", { name: /Register/i }));
  const asycAxios = axios.post.mockResolvedValue();
  await asycAxios();
  expect(axios.post).toHaveBeenCalledTimes(1);
});

test("should render login button link", () => {
  expect(screen.getByRole("button", { name: /Login/i })).toBeInTheDocument();
});
