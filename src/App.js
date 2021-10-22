
import { Route } from "react-router";
import WelcomePage from "./WelcomePage/WelcomePage";
import Word from "./Word/Word";


function App() {
  
  return (
    
    <div className="App">
      <Route exact path="/"><WelcomePage/></Route>
      <Route path="/word/:word" component={()=><Word key={window.location.pathname} />}></Route>
    </div>
  );
}

export default App;
