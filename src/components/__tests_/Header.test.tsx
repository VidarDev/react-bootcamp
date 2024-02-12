// Header.test.tsx

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { render, screen } from "@testing-library/react-native";

import { Header } from "~/components/Header";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
describe("Header", () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  it("renders correctly", () => {
    render(<Header title="SpaceCraft" />);

    screen.getByText("SpaceCraft");
  });
});
