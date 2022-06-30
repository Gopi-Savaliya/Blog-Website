import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import { Context } from "../../context/Context";

jest.mock("axios");
const posts = [
  {
    _id: "62a1b2d588d1cb02f5621808",
    username: "John",
    title: "My First Story",
    photo: "1654764245299download.jpeg",
    desc: "Jay Shree Krishna.",
    createdAt: "2022-06-09T08:44:05.380Z",
  },
  {
    _id: "62a2d809300631cae35f383f",
    username: "John",
    title: "Nature",
    photo: "1654839305461nature.jpeg",
    desc: "hsoidhfvi",
    createdAt: "2022-06-10T05:35:05.474Z",
  },
];

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

beforeAll(async () => {
  const asyncMock = axios.get.mockResolvedValue(posts);
  await asyncMock();
  expect(axios.get).toHaveBeenCalledTimes(1);
});

beforeEach(() => {
  render(
    <Context.Provider value={value}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </Context.Provider>
  );
});

test("should render header", () => {
  expect(screen.getByText(/Welcome To The/i)).toBeInTheDocument();
  expect(screen.getByText(/Blog/i)).toBeInTheDocument();
});

test("should render posts", () => {
  expect(screen.getByTestId("PostsContainer")).toBeInTheDocument();
});

test("should render sidebar", () => {
  expect(screen.getByTestId("SidebarContainer")).toBeInTheDocument();
});
