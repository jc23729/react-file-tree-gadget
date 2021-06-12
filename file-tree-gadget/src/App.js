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
  const borderStyle = { border: '2px solid pink' };
  return <div style={borderStyle}>{props.name}{props.children}</div>
};

const File = (props) => {
  return <div>{props.name}</div>;
};
export default App;
