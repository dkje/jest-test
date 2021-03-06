import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapped:ShallowWrapper;

beforeEach(()=>{
  wrapped = shallow(<App />);
})

it("shows a comment box", (): void => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});