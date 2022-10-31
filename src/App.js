import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyle from "./styles/global";
import Default from "./pages/Default";
import Footer from "./components/Footer";
import Visualizer from "./pages/Visualizer";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import create from "zustand";

export const useFileStore = create((set) => ({
    balls: [],
    box: null,
    setBalls: (newBalls) => set(() => ({ balls: newBalls })),
    setBox: (newBox) => set(() => ({ box: newBox })),
    resetBalls: () => set(() => ({ balls: [] })),
    resetBox: () => set(() => ({ box: {} })),
}))

function App() {
  return (
      <Router>
          <GlobalStyle/>
          <Navbar/>

          <Routes>
              <Route path='/' element={<Default/>} />
              <Route path='/visualizer' element={<Visualizer/>} />
              <Route path='/*' element={<Default/>} />
          </Routes>

          <Footer/>
          <ToastContainer/>
      </Router>
  );
}

export default App;
