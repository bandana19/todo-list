
import { ToastContainer } from 'react-toastify';
import './App.css';
import Test from './component/Test';

function App() {
  return (
    <div>
      <Test/>
      <ToastContainer
            hideProgressBar
            position="top-center"
            limit={1}
            newestOnTop={true}
            autoClose={2000}
          />
    </div>
  );
}

export default App;
