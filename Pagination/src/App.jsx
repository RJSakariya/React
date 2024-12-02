import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './App/Store';
import Home from './Component/Home';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Home/>
      </BrowserRouter>
    </Provider>
  );
}
