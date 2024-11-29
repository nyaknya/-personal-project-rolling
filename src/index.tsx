import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import App from './App';

if (!window.Kakao.isInitialized()) {
  window.Kakao.init('89c447f53ffcf78338c0628624fc3216');
  console.log('Kakao initialized:', window.Kakao.isInitialized());
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(<App />);
