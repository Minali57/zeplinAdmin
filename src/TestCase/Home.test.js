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
// import { render, waitForElement } from "react-testing-library";
import Volunteer from "../Volunteer/Volunteer";
import selectEvent from "react-select-event";

const navigate = jest.fn();
beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
});
jest.setTimeout(30000);

it("filter by country", async () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );

  const countryPicker = screen.getByLabelText("CountryPicker");
  var countryObj = screen.getAllByTestId("country-display");

  expect(countryObj).toHaveLength(12);
  await selectEvent.select(countryPicker, ["Spain", "Canada"]);
  countryObj = screen.getAllByTestId("country-display");
  expect(countryObj).toHaveLength(2);
});

it("filter by city", async () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );

  const cityPicker = screen.getByLabelText("CityPicker");
  var cards = screen.getAllByTestId("country-display");

  expect(cards).toHaveLength(12);
  await selectEvent.select(cityPicker, ["Barcelona"]);
  cards = screen.getAllByTestId("country-display");
  expect(cards).toHaveLength(1);
});

it("filter by theme", async () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );

  const themePicker = screen.getByLabelText("ThemePicker");
  var cards = screen.getAllByTestId("country-display");

  expect(cards).toHaveLength(12);
  await selectEvent.select(themePicker, ["Environment"]);
  cards = screen.getAllByTestId("country-display");
  expect(cards).toHaveLength(2);
});

it("search by text", async () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );

  const search = screen.getByTestId("search");
  var cards = screen.getAllByTestId("country-display");

  expect(cards).toHaveLength(12);
  fireEvent.change(search, { target: { value: "gr" } });
  cards = screen.getAllByTestId("country-display");
  expect(cards).toHaveLength(3);
});

it("redirect to details", async () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
    </BrowserRouter>
  );
  const submitBtn = screen.getByTestId("submit-1");
  await fireEvent.click(submitBtn);
  expect(navigate).toHaveBeenCalledWith("/volunteer");
});
