import React from "react";
import {
  fireEvent,
  render,
  screen,
  waitForElement,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as router from "react-router";
import Header from "../Home/Header/Header";
import Home from "../Home/Home";
import StoriesListing from "../StoriesListing/StoriesListing";
import PolicyPage from "../PolicyPage/PolicyPage";
// import { render, waitForElement } from "react-testing-library";
import RegistrationForm from "../Registration/RegistrationForm";
import Volunteer from "../Volunteer/Volunteer";
import selectEvent from "react-select-event";

const navigate = jest.fn();
beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
});
jest.setTimeout(30000);

it("submit new mission modal open", async () => {
  render(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
  var addMissionBtn = screen.queryByTestId("btn-addMission-Modal");
  expect(addMissionBtn).toBeNull();

  const submitBtn = screen.getByTestId("btn-submit");
  await fireEvent.click(submitBtn);

  addMissionBtn = screen.queryByTestId("btn-addMission-Modal");
  expect(addMissionBtn).not.toBeNull();
});

it("edit profile page", async () => {
  render(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );

  const submitBtn = screen.getByTestId("btn-edit-profile");
  await fireEvent.click(submitBtn);
  expect(navigate).toHaveBeenCalledWith("/edit");
});

it("redirect to story listing", async () => {
  render(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );

  const submitBtn = screen.getByTestId("storyListingLink");
  await fireEvent.click(submitBtn);
  expect(navigate).toHaveBeenCalledWith("/story/listing");
});

it("share story", async () => {
  render(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<StoriesListing />} />
      </Routes>
    </BrowserRouter>
  );

  const submitBtn = screen.getByTestId("btn-share-story");
  await fireEvent.click(submitBtn);
  expect(navigate).toHaveBeenCalledWith("/share/story");
});

it("story detail", async () => {
  render(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<StoriesListing />} />
      </Routes>
    </BrowserRouter>
  );

  const submitBtn = screen.getAllByTestId("btn-story-detail");
  await fireEvent.click(submitBtn[0]);
  expect(navigate).toHaveBeenCalledWith("/story/detail");
});

it("policy page", async () => {
  render(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PolicyPage />} />
      </Routes>
    </BrowserRouter>
  );

  const submitBtn = screen.getByTestId("prefernces");
  console.log(window.scrollY);
  await fireEvent.click(submitBtn);
  await new Promise((r) => setTimeout(r, 1000));
});

it("RegistrationForm ", async () => {
  render(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );

  const registerBtn = screen.getByTestId("btn-register");
  var fname = screen.queryAllByText("Please enter your fname");
  var lname = screen.queryAllByText("Please enter your lname");
  var email = screen.queryAllByText("Please enter your email");
  var pass = screen.queryAllByText("Please enter your password");

  expect(fname).toHaveLength(0);
  expect(lname).toHaveLength(0);
  expect(email).toHaveLength(0);
  expect(pass).toHaveLength(0);

  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    await fireEvent.click(registerBtn);
  });

  fname = screen.queryAllByText("Please enter your fname");
  lname = screen.queryAllByText("Please enter your lname");
  email = screen.queryAllByText("Please enter your email");
  pass = screen.queryAllByText("Please enter your password");

  expect(fname).toHaveLength(1);
  expect(lname).toHaveLength(1);
  expect(email).toHaveLength(1);
  expect(pass).toHaveLength(1);
});

it("Phone Validation", async () => {
  render(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );

  var phoneValid = screen.queryAllByText("Phone number is not valid");
  expect(phoneValid).toHaveLength(0);

  const phoneInput = screen.getByLabelText("Phone Number");
  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    await fireEvent.change(phoneInput, { target: { value: "8" } });
  });
  phoneValid = screen.queryAllByText("Phone number is not valid");
  expect(phoneValid).toHaveLength(1);
});

it("Pass Match", async () => {
  render(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );

  var error = screen.queryAllByText("Password must match");
  expect(error).toHaveLength(0);

  const passInut = screen.getByLabelText("Password");
  const cpassInput = screen.getByLabelText("Confirm Password");

  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    await fireEvent.change(passInut, { target: { value: "A12345" } });
    await fireEvent.change(cpassInput, { target: { value: "A" } });
  });
  error = screen.queryAllByText("Password must match");
  expect(error).toHaveLength(1);
});
