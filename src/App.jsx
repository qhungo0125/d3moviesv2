import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <MainPage />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
