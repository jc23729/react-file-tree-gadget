function App() {
  return (
    <div>
      <Folder name="Desktop">
        <h3>some stuff</h3>
        <h4>other thing</h4>
      </Folder>
      <Folder name="Application" />
      <File name="dogs.jpeg" />
      <File name="cats.png" />
    </div>
  );
}

const Folder = (props) => {
  console.log(props);
  return <div>{props.name}{props.children}</div>
};

const File = (props) => {
  return <div>{props.name}</div>;
};
export default App;
