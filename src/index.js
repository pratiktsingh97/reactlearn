import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" time="today at 6:00 pm" comment="Nice blog post!"/>
      <CommentDetail author="Alex" time="today at 7:00 pm" comment="me likey"/>
      <CommentDetail author="Jane" time="today at 8:00 pm" comment="very good"/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
