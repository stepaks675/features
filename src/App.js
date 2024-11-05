import { Route, Routes } from "react-router-dom";
import { Weather } from "./pages/Weather.tsx";
import { Crypto } from "./pages/Crypto.tsx";
import { Layout } from "./components/Layout.tsx";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route path="/crypto" element={<Crypto/>}/>
          <Route path="/weather" element={<Weather/>}/>
      </Route>
    </Routes>
  )
}

export default App;
