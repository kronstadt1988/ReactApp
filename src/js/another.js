var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

ReactDOM.render(
  React.createElement(CommentBox, null),
  document.getElementById('example')
);



ReactDOM.render(
  <h1>Hello, wooioood!</h1>,
  document.getElementById('example2')
);