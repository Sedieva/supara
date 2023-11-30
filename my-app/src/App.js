import Complex from "./components/complex";
import Contact from "./components/contact";
import Header from "./components/header";
import Hotel from "./components/hotel";
import Servis from "./components/servis";
import Sozdat from "./components/sos";
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

        <Route path="complex-page" element={<Complex/>}/>
        <Route path="sozdat-page" element={<Sozdat/>}/>
        <Route path="hotel-page" element={<Hotel/>}/>
        <Route path="servis-page" element={<Servis/>}/>
        <Route path="contact-page" element={<Contact/>}/>


      </Routes>
    </div>
  );
}

export default App;
