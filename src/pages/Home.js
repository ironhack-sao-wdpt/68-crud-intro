import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../apis/api";

// "R" do CRUD: Read (GET), devemos listar os livros existentes
function Home() {
  const [state, setState] = useState([]);

  const navigate = useNavigate();

  // 1. Executar tudo dentro do useEffect
  useEffect(() => {
    // 2. Usar o Axios para trazer a lista de livros
    api
      // Só precisamos chamar "/books" porque o domínio da API está configurado no arquivo apis/api.js
      .get("/books")
      .then((response) => {
        // 3. Atualizar o state
        setState([...response.data]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>Você está na Home</h1>
      <div className="row mt-5 ">
        {/* 4. Usar o .map para renderizar o HTML e exibir cada registro */}
        {state.map((currentBookObj) => {
          const { title, coverImage, author, releaseYear, id } = currentBookObj;

          return (
            <div
              key={id}
              className="col-6 border-end mt-3"
              onClick={() => navigate(`/book/${id}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="row mx-3">
                <div className="col-4">
                  <img
                    className="img-fluid"
                    src={coverImage}
                    alt={`Capa do livro ${title}`}
                  />
                </div>
                <div className="col-8">
                  <h2>{title}</h2>
                  <p>{releaseYear}</p>
                  <small>{author}</small>
                  {/* <Link to={`/book/${id}`} className="btn btn-primary">
                    Ver detalhes
                  </Link> */}
                  <p>Teste Pedro</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
