import reducers from './redux/reducers'
import watchers from './redux/sagas'
import createSageMiddleware from 'redux-saga'
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";

const saga = createSageMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(saga)
);

saga.run(watchers);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
