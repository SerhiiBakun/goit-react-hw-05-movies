import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App/App';
import { GlobalStyle } from 'GlobalStyle';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </StrictMode>
);
