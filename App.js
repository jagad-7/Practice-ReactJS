import './App.css';
import ChildProp from './Compoents/ChildProp';
import Counter from './Compoents/Counter';
import Counter2 from './Compoents/Counter2';
import Home from './Compoents/Home';
import Product from './Compoents/Product';
import User from './Compoents/User';

function App() {
  return (
    <div className="App">
      <Home />
      <User />
      <Counter />
      <ChildProp name='xyz'>
        <button>Share</button>
        <button>Like</button>
        <button>Subscribe</button>
      </ChildProp>
      <Counter2 />
      <Product />
    </div>
  );
}

export default App;
