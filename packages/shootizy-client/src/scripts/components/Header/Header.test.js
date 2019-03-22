import Header from "./Header";
import React from "react";
import { shallow } from "enzyme";

test("should render a header element", function() {
  const wrapper = shallow(<Header />);
  expect(wrapper.find("header").length).toBe(1);
});
