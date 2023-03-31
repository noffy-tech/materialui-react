import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Login from "../Modules/Accounts/Login";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import TextField from "@mui/material/TextField";
Enzyme.configure({ adapter: new Adapter() });

describe("Login Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Login />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("should render the Card component", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBeTruthy();
  });
  it("renders the email and password input fields", () => {
    const wrapper = mount(<Login />);
    expect(wrapper.find(TextField).at(0).prop("label")).toEqual("Email");
    expect(wrapper.find(TextField).at(1).prop("label")).toEqual("Password");
    wrapper.unmount();
  });
});
