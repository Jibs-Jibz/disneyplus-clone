import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserName } from "./features/user/userSlice";
import Login from "./components/Login";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  const userName = useSelector(selectUserName);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            {userName ? <Redirect to="/home" /> : <Login />}
          </Route>
          <Route path="/home">
            {userName ? <Home /> : <Redirect to="/" />}
          </Route>
          <Route path="/detail/:id">
            {userName ? <Detail /> : <Redirect to="/" />}
          </Route>
          <Route path="/*">
            {userName ? <Login /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;