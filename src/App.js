import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Darshboard from "./component/darshboard"

function App() {
  return (
    <Router>
      <Switch>
          <Route
            to='/'
            component={Darshboard}
          />
      </Switch>
    </Router>
  );
}

export default App;
