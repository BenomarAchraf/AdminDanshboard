import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Topbar> </Topbar>
      <div className="container">
    <Sidebar></Sidebar>
      <div className="others">
      Other pages
      </div>
      </div>
    </div>
  );
}

export default App;
