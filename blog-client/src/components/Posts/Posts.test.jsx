import { render, screen } from "@testing-library/react";
import { Posts } from "./Posts";
import { MemoryRouter } from "react-router-dom";

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

beforeEach(() => {
  render(
    <MemoryRouter>
      <Posts posts={posts} />
    </MemoryRouter>
  );
});

test("should render posts", () => {
  expect(screen.getAllByTestId("PostContainter")).toHaveLength(2);
});
