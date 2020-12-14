import "@testing-library/jest-dom/extend-expect";
import { render, waitFor, fireEvent } from "@testing-library/react";
import Header from "./";

describe("<Header />", () => {
  it("render a h1 tag", async () => {
    const { getByText } = render(<Header />);
    expect(getByText("Flickr Photo Feed")).toBeTruthy();
  });
  it("render a input field", async () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("search")).toBeTruthy();
  });
  it("render a button", async () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("submit")).toBeTruthy();
  });
  it("fires callback on click", async () => {
    const setFilter = jest.fn();
    const { getByTestId } = render(<Header setFilter={setFilter} />);
    fireEvent.click(getByTestId("submit"));

    await waitFor(() => {
      expect(setFilter).toBeCalledTimes(1);
    });
  });
});
