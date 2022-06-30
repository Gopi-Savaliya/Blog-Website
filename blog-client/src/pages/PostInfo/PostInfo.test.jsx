import { render, screen } from "@testing-library/react";
import { PostInfo } from "./PostInfo";
import { MemoryRouter } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";

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

const post = {
  _id: "62a1b2d588d1cb02f5621808",
  username: "John",
  title: "My First Story",
  photo: "1654764245299download.jpeg",
  desc: "Jay Shree Krishna.",
  createdAt: "2022-06-09T08:44:05.380Z",
};

beforeAll(async () => {
  const asyncMock = axios.get.mockResolvedValue(post);
  await asyncMock();
  expect(axios.get).toHaveBeenCalledTimes(1);
});

beforeEach(async () => {
  render(
    <Context.Provider value={value}>
      <MemoryRouter>
        <PostInfo />
      </MemoryRouter>
    </Context.Provider>
  );
});

test("should render single post", () => {
  expect(screen.getByTestId("SinglePostContainer")).toBeInTheDocument();
});

test("should render sidebar", () => {
  expect(screen.getByTestId("SidebarContainer")).toBeInTheDocument();
});
