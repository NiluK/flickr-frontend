import "@testing-library/jest-dom/extend-expect";
import { render, waitFor } from "@testing-library/react";

import Header from "./";

describe.only("59892259", () => {
  let originFetch;
  beforeEach(() => {
    originFetch = (global as any).fetch;
  });
  afterEach(() => {
    (global as any).fetch = originFetch;
  });


  it("should call the fetch APi", async () => {
    const mockData = { photos: [] };
    const response = { json: jest.fn().mockResolvedValueOnce(mockData) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(response as any);
    (global as any).fetch = mockedFetch;
    render(<Header />);
    await waitFor(() => {
      expect(mockedFetch).toBeCalledTimes(1);
      expect(response.json).toBeCalledTimes(1);
    });
  });

  it("should display images", async () => {
    const mockData = {
      photos: new Array(20).fill({
        media: {
          m: "https://google.com/",
        },
      }),
    };

    const response = { json: jest.fn().mockResolvedValueOnce(mockData) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(response as any);
    (global as any).fetch = mockedFetch;
    const { getAllByTestId } = render(<Header />);
    await waitFor(() => {
      expect(getAllByTestId("photo").length).toBe(20);
    });
  });
});
