import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './redux/store';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <HashRouter> {/* Так як GitHub не підтримує BrowserRouter */}
      <Suspense fallback={<div>Loading</div>}>
        <App />
      </Suspense>
    </HashRouter>
  </Provider>

);

