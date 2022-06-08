import CardList from "./CardList";
import { robots } from "./robots";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBox from "./SearchBox";

function App() {

  return (
    <div className="pt-5 text-center" style={{background: '#eee'}}>
      <h1>ROBOFRIENDS</h1>
      <SearchBox />
      <CardList robots={robots} />
    </div>
  );
}

export default App;
