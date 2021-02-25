import List_Container from './Components/List_Container'
import container from './Styles/container.css';
import Search_Box from './Components/Search_Box.js';
// import List_Container from './Components/List_Container.js';

function App() {
  return (
    <div className="container">
      <Search_Box></Search_Box>
      <List_Container></List_Container>
    </div>
  );
}

export default App;
