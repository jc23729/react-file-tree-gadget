function App() {
  return (
    <div>
      <Folder name="Desktop">
        <h1>Some Stuff</h1>
        <h3>other things</h3>
        </Folder>
      <Folder name="Application" />
      <File name="dogs.jpeg" />
      <File name="cats.png" />
    </div>
  );
}

const Folder = (props) => {
  console.log(props);
  return <h4>{props.name}</h4>;
};

const File = (props) => {
  return <h5>{props.name}</h5>;
};
export default App;
