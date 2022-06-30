import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { SinglePost } from "./SinglePost";
import { Context } from "../../context/Context";
import { MemoryRouter } from "react-router-dom";
import "react-router-dom";
import axios from "axios";

jest.mock("axios");
let updateMode = false;

const post = {
  _id: "62a1b2d588d1cb02f5621808",
  username: "John",
  title: "My First Story",
  photo: "1654764245299download.jpeg",
  desc: "Jay Shree Krishna.",
  createdAt: "2022-06-09T08:44:05.380Z",
  category: "6299a0d570c4ff2302fc8c38",
};

const updatedPost = {
  _id: "62a1b2d588d1cb02f5621808",
  username: "John",
  title: "My First Story!",
  photo: "1654764245299download.jpeg",
  desc: "Jay Shree Krishna!!!",
  createdAt: "2022-06-09T08:44:05.380Z",
};

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

const category = {
  _id: "6299a0d570c4ff2302fc8c38",
  name: "Music",
};

const asyncMock = jest
  .fn()
  .mockResolvedValue(categories)
  .mockResolvedValueOnce(category);

beforeEach(async () => {
  render(
    <Context.Provider value={value}>
      <MemoryRouter>
        <SinglePost
          post={post}
          updateMode={updateMode}
          setUpdateMode={jest.fn()}
        />
      </MemoryRouter>
    </Context.Provider>
  );
});

test("should render post image", async () => {
  expect(
    screen.getByRole("img", {
      name: /SinglePostImage/i,
    })
  ).toBeInTheDocument();
});

describe("if updated mode is off", () => {
  if (!updateMode) {
    test("should render post title", () => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
    });

    describe("if current user can update post", () => {
      if (value.user.username === post.username) {
        test("should render post update and delete icons", () => {
          expect(screen.getByTestId("SinglePostEditIcon")).toBeInTheDocument();
          expect(
            screen.getByTestId("SinglePostDeleteIcon")
          ).toBeInTheDocument();
        });
      }
    });

    test("should render category if any", async () => {
      if (post.category) {
        await asyncMock();
        expect(asyncMock).toHaveBeenCalledTimes(1);
        expect(screen.getByTestId("Category")).toBeInTheDocument();
      }
    });

    test("should render post description", () => {
      expect(screen.getByText(post.desc)).toBeInTheDocument();
    });

    test("should delete post on delete icon click", async () => {
      fireEvent.click(screen.getByTestId("SinglePostDeleteIcon"));
      await axios.delete.mockResolvedValue();
      expect(axios.delete).toHaveBeenCalledTimes(1);
    });
  }
});

describe("if updated mode is on", () => {
  if (updateMode) {
    test("should render post title input", () => {
      expect(screen.getByPlaceholderText(/title/i)).toBeInTheDocument();
    });

    test("should render dropdown for category", async () => {
      expect(screen.getByTestId("Dropdown")).toBeInTheDocument();
      await asyncMock();
      expect(asyncMock).toHaveBeenCalledTimes(1);
    });

    test("should render post description textarea", () => {
      expect(screen.getByPlaceholderText(/description/i)).toBeInTheDocument();
    });

    test("should render update button", () => {
      expect(
        screen.getByRole("button", { name: "Update" })
      ).toBeInTheDocument();
    });

    test("should update post data on update button click", async () => {
      fireEvent.click(screen.getByRole("button", { name: "Update" }));
      updateMode = false;
      expect(updateMode).toBeFalsy();
      await axios.put.mockResolvedValue(updatedPost);
      expect(axios.put).toHaveBeenCalledTimes(1);
    });
  }
});

test("should render post author name", async () => {
  expect(screen.getByTestId("SinglePostAuthor")).toBeInTheDocument();
});

test("should render post date", async () => {
  expect(
    screen.getByText(new Date(post.createdAt).toDateString())
  ).toBeInTheDocument();
});
