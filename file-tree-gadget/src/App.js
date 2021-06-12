import React, { useState } from "react";

function App() {
  return (
    <div>
      <Folder name="Desktop">
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
  //so isOpen is set to true becasue its equal to useState true
  const [isOpen, setIsOpen] = useState(true);
  const { name, children } = props;

  const handleClick = () =>
    //so we want to activate this and make it like a switch, we set it to its opposite
    setIsOpen(!isOpen);

  return (
    <div>
      <span onClick={handleClick}>
        <i className="folder icon"></i>
      </span>
      {name}
      <div style={{ marginLeft: "17px" }}>{isOpen ? children : null}</div>
    </div>
  );
};

const File = (props) => {
  return <div>{props.name}</div>;
};
export default App;
