// import React from "react";
// import { render, screen } from "@testing-library/react";
// import Button from "./index";
// import { MemoryRouter } from "react-router-dom";

// test("Should not allowed click button if isDisabled is present", () => {
//   render(<Button isDisabled></Button>);

//   const button = screen.getByRole("button");

//   expect(button).toHaveClass("disabled");
//   expect(button).toBeDisabled();
// });

// test("Should render loading/spinner", () => {
//   render(<Button isLoading></Button>);

//   const loadingText = screen.getByText(/loading/i);
//   const button = screen.getByRole("button");

//   expect(loadingText).toBeInTheDocument();
//   expect(button).toHaveClass("loading");
// });

// test("Should render <a> tag", () => {
//   render(<Button type="link" isExternal></Button>);

//   const link = screen.getByRole("link", { name: "Link" }); // Use 'link' role for anchor elements

//   expect(link).toBeInTheDocument();
// });

// test("Should render <Link> tag", () => {
//   render(
//     <MemoryRouter>
//       <Button href="" type="link"></Button>
//     </MemoryRouter>
//   );

//   const link = screen.getByRole("link"); // Use 'link' role for anchor elements

//   expect(link).toBeInTheDocument();
// });


import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import the jest-dom extension
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter from react-router-dom
import Button from "./index";

test("Should render a normal button", () => {
  render(<Button>Normal Button</Button>);

  const button = screen.getByRole("button", { name: "Normal Button" });

  expect(button).toBeInTheDocument();
  expect(button).not.toHaveClass("disabled");
});

test("Should render a disabled button", () => {
  render(<Button isDisabled>Disabled Button</Button>);

  const button = screen.getByRole("button", { name: "Disabled Button" });

  expect(button).toBeInTheDocument();
  expect(button).toHaveClass("disabled");
  expect(button).toBeDisabled();
});

test("Should render a loading button", () => {
  render(<Button isLoading>Loading Button</Button>);

  const button = screen.getByRole("button", { name: "Loading..." });

  expect(button).toBeInTheDocument();
  expect(button).toHaveClass("disabled");
  expect(button).toBeDisabled();
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

test("Should render an internal link", () => {
  render(
    <MemoryRouter>
      <Button type="link" href="/internal">Internal Link</Button>
    </MemoryRouter>
  );

  const link = screen.getByRole("link", { name: "Internal Link" });

  expect(link).toBeInTheDocument();
});

test("Should render an external link", () => {
  render(
    <Button type="link" href="" isExternal>External Link</Button>
  );

  const link = screen.getByRole("link", { name: "External Link" });

  expect(link).toBeInTheDocument();
});
