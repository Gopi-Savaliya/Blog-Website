import { fireEvent, render, screen } from "@testing-library/react";
import { Settings } from "./Settings";
import { MemoryRouter } from "react-router-dom";
import "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";

jest.mock("axios");
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
        <Settings />
      </MemoryRouter>
    </Context.Provider>
  );
});

test("should render update your profile title", () => {
  expect(screen.getByText(/Update Your Account/i)).toBeInTheDocument();
});

test("should render delete account link", () => {
  expect(screen.getByText(/Delete Account/i)).toBeInTheDocument();
});

test("should render profile picture field", () => {
  expect(screen.getByText(/Profile Picture/i)).toBeInTheDocument();
  expect(
    screen.getByRole("img", { name: /ProfilePhoto/i })
  ).toBeInTheDocument();
  expect(screen.getByTestId("PPIcon")).toBeInTheDocument();
  expect(screen.getByTestId("PPFileInput")).toBeInTheDocument();
});

test("should render username field", () => {
  expect(screen.getByText(/Username/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Safari")).toBeInTheDocument();
});

test("should render email field", () => {
  expect(screen.getByText(/Email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/safari@gmail.com/i)).toBeInTheDocument();
});

test("should render password field", () => {
  expect(screen.getByText(/Password/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
});

test("should render about me field", () => {
  expect(screen.getByPlaceholderText(/About Me.../i)).toBeInTheDocument();
})

test("should render update button", () => {
  expect(screen.getByRole("button", { name: /Update/i })).toBeInTheDocument();
});

test("should update profile on update button click", async () => {
  fireEvent.click(screen.getByRole("button", { name: /Update/i }));
  await axios.put.mockResolvedValue();
  expect(axios.put).toHaveBeenCalledTimes(1);
});
