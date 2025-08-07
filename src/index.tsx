import ReactDOM from 'react-dom/client';
import { Counter } from './components/Counter';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <div>
    <Counter />
  </div>
)