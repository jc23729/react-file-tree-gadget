

function App() {
  return (
    <div>
    
      <Folder  food = "cake" drink = "coffee"/>
    </div>
  );
}

const Folder = (props) => {
  // so we create a variable const name,  now we can manipulate it and pass it with jsx {}
  console.log(props);
  const name = 'my_desktop';
  return <h4>{ name }</h4>
}

export default App;
