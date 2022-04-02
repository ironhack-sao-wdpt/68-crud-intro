import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";

import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";
import BookCreate from "../pages/BookCreate";
import BookUpdate from "../pages/BookUpdate";
import BookDelete from "../pages/BookDelete";
import About from "../pages/About";
import BookDeleteLogico from "../pages/BookDeleteLogico";

// 1. Instalar json-server como dependência global:
// Windows
// $ npm install -g json-server
// Mac ou Linux
// $ sudo npm install -g json-server

// 2. Crie um arquivo chamado db.json dentro da pasta src/

// 3. Esse arquivo deve conter um objeto, com pelo menos uma propriedade, e essa propriedade será a rota da sua API. O valor da propriedade deve ser uma array vazia.

// 4. Em um terminal, na pasta do seu projeto, execute:
// $ json-server --watch src/db.json --port 4000

// 5. Pronto, sua API já está pronta para receber requisições. Veja a URL em seu terminal (na parte "Resources")

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/book/create" element={<BookCreate />} />
          <Route path="/book/update/:id" element={<BookUpdate />} />
          <Route path="/book/delete/:id" element={<BookDelete />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/book/delete-logico/:id"
            element={<BookDeleteLogico />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
