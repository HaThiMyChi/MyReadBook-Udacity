import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeBook from "./Pages/HomeBook"
import SearchBook from "./Pages/SearchBook"

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeBook />} />
          <Route path="/search" element={<SearchBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
