import React from "react";
import CommentBox from './CommentBox';
import CommentList from './CommentList';

const App: React.FC<Record<string, never>> = () => {
  return <div> <CommentBox/><CommentList/> </div>;
};

export default App;
