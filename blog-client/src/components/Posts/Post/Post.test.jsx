import { render, screen } from "@testing-library/react";
import { Post } from "./Post";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import { act } from "react-dom/test-utils";

jest.mock("axios");
const post = {
  _id: "62a1b2d588d1cb02f5621808",
  username: "John",
  title: "My First Story",
  photo: "1654764245299download.jpeg",
  desc: "Jay Shree Krishna.",
  createdAt: "2022-06-09T08:44:05.380Z",
  category: "6299a0d570c4ff2302fc8c38",
};

const category = {
  _id: "6299a0d570c4ff2302fc8c38",
  name: "Music",
};

describe("test every component except category", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Post post={post} />
      </MemoryRouter>
    );
  });

  test("should render post image", () => {
    expect(
      screen.getByRole("img", {
        name: /PostImage/i,
      })
    ).toBeInTheDocument();
  });

  test("should render post title", () => {
    expect(screen.getByText(post.title)).toBeInTheDocument();
  });

  test("should render post date", () => {
    expect(
      screen.getByText(new Date(post.createdAt).toDateString())
    ).toBeInTheDocument();
  });

  test("should render post description", () => {
    expect(screen.getByTestId("PostDescription")).toBeInTheDocument();
  });
});

describe("test component category", () => {
  test("should render post categories", async () => {
    if (post.category) {
      const AsyncAxios = await axios.get.mockResolvedValue(category);
      AsyncAxios();
      expect(axios.get).toHaveBeenCalledTimes(1);
      await act(async () => {
        render(
          <MemoryRouter>
            <Post post={post} />
          </MemoryRouter>
        );
      });
      expect(screen.getByTestId("Category")).toBeInTheDocument();
    }
  });
});
