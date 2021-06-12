function App() {
  return (
    <div>
      <Folder name="Desktop">
        <File name="dogs.jpeg" />
        <File name="cats.png" />
      </Folder>
      <Folder name="Application" />
    </div>
  );
}

const Folder = (props) => {
  console.log(props);

  return (
    <div style={{ border: "2px solid pink" }}>
      {props.name}
      <div style={{ marginLeft: "17px" }}>
        {props.children}
      </div>
    </div>
  );
};

const File = (props) => {
  return <div>{props.name}</div>;
};
export default App;
