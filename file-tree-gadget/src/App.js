import React, { useState } from "react";

function App() {
  return (
    <div>
      <Folder name="Desktop" isOpen={true}>
        <Folder name="Music">
          <File name="all_star.mp4" />
          <File name="express_file.mp4" />
        </Folder>
        <File name="dogs.jpeg" />
        <File name="cats.png" />
      </Folder>
      <Folder name="Application" />
    </div>
  );
}

const Folder = (props) => {
  const { name, isOpen, children } = props;
  return (
    <div>
      {props.name}
      <div style={{ marginLeft: "17px" }}>{isOpen ? children : null}</div>
    </div>
  );
};

const File = (props) => {
  return <div>{props.name}</div>;
};
export default App;
