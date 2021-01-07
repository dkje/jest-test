import React from "react";
import { mount, ReactWrapper } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapped: ReactWrapper;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a textarea and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

describe("the text area", () => {
  beforeEach(() => {
    wrapped
      .find("textarea")
      .simulate("change", { target: { value: "new comment" } });
    // change 이벤트를 두번째 인자를 parameter로 실행시킨다
    // setState가 비동기적으로 실행됨
    wrapped.update(); // 강재로 rerender시키기
  });

  it("has a textarea thar users can type it", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("when form is submitted, text area gets emptied", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");

    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
