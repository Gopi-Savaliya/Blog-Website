import { render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { MemoryRouter } from "react-router-dom";
import { Context } from "../../context/Context";

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
        <Sidebar />
      </MemoryRouter>
    </Context.Provider>
  );
});

test("should render all sidebar containers", () => {
  expect(screen.getByText(/About Me/i)).toBeInTheDocument();
  expect(screen.getByText(/Categories/i)).toBeInTheDocument();
  expect(screen.getByText(/Follow Us/i)).toBeInTheDocument();
});
