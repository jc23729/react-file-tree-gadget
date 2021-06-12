function App() {
  return (
    <div>
      <Folder name="Desktop"> some stuff</Folder>
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
