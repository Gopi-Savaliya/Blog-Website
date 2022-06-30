import { fireEvent, render, screen } from "@testing-library/react";
import { Write } from "./Write";
import { MemoryRouter } from "react-router-dom";
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

const categories = [
  {
    _id: "6299a0d570c4ff2302fc8c38",
    name: "Music",
  },
  {
    _id: "62a9cc862f97d0c324a5932c",
    name: "dance",
  },
];

beforeEach(() => {
  render(
    <Context.Provider value={value}>
      <MemoryRouter>
        <Write />
      </MemoryRouter>
    </Context.Provider>
  );
});

test("should render image", () => {
  expect(screen.getByRole("img", { name: /WriteImage/i })).toBeInTheDocument();
});

test("should render image field", () => {
  expect(screen.getByTestId("WriteAddIcon")).toBeInTheDocument();
  expect(screen.getByTestId("WriteFileInput")).toBeInTheDocument();
});

test("should render write title field", () => {
  expect(screen.getByPlaceholderText(/Title/i)).toBeInTheDocument();
});

test("should render dropdown for category", async () => {
  expect(screen.getByTestId("Dropdown")).toBeInTheDocument();
  await axios.get.mockResolvedValue(categories);
  expect(axios.get).toHaveBeenCalledTimes(1);
});

test("should render post description field", () => {
  expect(
    screen.getByPlaceholderText(/Tell your story.../i)
  ).toBeInTheDocument();
});

test("should render publish button", () => {
  expect(screen.getByRole("button", { name: /Publish/i })).toBeInTheDocument();
});

test("should publish post on publish button click", async () => {
  fireEvent.click(screen.getByRole("button", { name: /Publish/i }));
  await axios.post.mockResolvedValue();
  expect(axios.post).toHaveBeenCalledTimes(1);
});
