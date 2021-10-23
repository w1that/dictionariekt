
import { Route } from "react-router";
import SignIn from "./Login/SignIn";
import WelcomePage from "./WelcomePage/WelcomePage";
import MyWords from "./Word/MyWords";
import Word from "./Word/Word";


function App() {
  
  return (
    
    <div className="App">
    <Route exact path="/"><SignIn/></Route>
      <Route exact path="/dictionary"><WelcomePage/></Route>
      <Route path="/word/:word" component={()=><Word key={window.location.pathname} />}></Route>
      <Route path="/mywords" ><MyWords/></Route>
    </div>
  );
}

export default App;
