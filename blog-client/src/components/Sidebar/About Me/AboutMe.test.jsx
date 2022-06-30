import { render, screen } from "@testing-library/react";
import { Context } from "../../../context/Context";
import { AboutMe } from "./AboutMe";

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
        <AboutMe />
    </Context.Provider>
  );
});

test("should render about me title", () => {
  expect(screen.getByText(/About Me/i)).toBeInTheDocument();
});

test("should render about me image", () => {
  expect(screen.getByRole("img", { name: /About Me/i })).toBeInTheDocument();
});

test("should render about me text", () => {
  expect(screen.getByTestId("AboutMeContent")).toBeInTheDocument();
});
