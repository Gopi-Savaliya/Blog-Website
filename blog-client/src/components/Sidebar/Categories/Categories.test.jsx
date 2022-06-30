import { render, screen, waitFor } from "@testing-library/react";
import { Categories } from "./Categories";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import { unmountComponentAtNode } from "react-dom";

jest.mock("axios");
const categories = [
  {
    _id: 1,
    name: "Music",
  },
  {
    _id: 2,
    name: "Dance",
  },
];
const Response = { data: categories };

test("should render Categories title", () => {
  render(
    <MemoryRouter>
      <Categories />
    </MemoryRouter>
  );
  expect(screen.getByText(/Categories/i)).toBeInTheDocument();
});

test("should render Categories list", async () => {
  const asyncMock = axios.get.mockResolvedValue(Response);
  await asyncMock();
  expect(axios.get).toHaveBeenCalledTimes(1);
  await act(async () => {
    render(
      <MemoryRouter>
        <Categories />
      </MemoryRouter>
    );
  });
  expect(screen.getByText(/Music/i)).toBeInTheDocument();
  expect(screen.getByText(/Dance/i)).toBeInTheDocument();
});
