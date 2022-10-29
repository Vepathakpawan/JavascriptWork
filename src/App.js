import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './component/home';
import Varibales from './component/JsWork/Varibale';
import DataType from './component/JsWork/DataType';
import Array from './component/JsWork/Array';
import Loop from './component/JsWork/Loop';
import IfElsePage from './component/JsWork/IfElse';
import AsynAwait from './component/JsWork/AsyncAwait';
import Event from './component/JsWork/Events';
import Mapping from './component/JsWork/Mapping';
import Objects from './component/JsWork/Objects';

function App() {
  return (
   <>
   <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/variable" component={Varibales} />
    <Route path="/datatype" component={DataType} />
    <Route path="/array" component={Array} />
    <Route path="/loop" component={Loop} />
    <Route path="/if-else" component={IfElsePage} />
    <Route path="/asyn-await" component={AsynAwait} />
    <Route path="/events" component={Event} />
    <Route path="/mapping" component={Mapping} />
    <Route path="/objects" component={Objects} />

    <Route component={Error}/>
   </Switch>
   </>
  );
}

export default App;
