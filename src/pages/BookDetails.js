import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// R do CRUD: Read (GET), buscar detalhes de um livro específico
function BookDetails() {
  const [state, setState] = useState({
    title: "",
    author: "",
    releaseYear: "",
    genre: "",
    coverImage: "",
    synopsis: "",
    id: 0,
  });

  // 1. Receber o parâmetro de rota (da URL do navegador)
  const { id } = useParams();

  // 2. Dentro do useEffect,

  useEffect(() => {
    async function fetchBook() {
      try {
        // 3. Buscar os detalhes do livro específico que o usuário clicou
        // 4. Solicitar detalhes do livro pelo Axios
        const response = await axios.get(`http://localhost:4000/books/${id}`);

        // 5. Atualizar o state
        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchBook();
  }, [id]);

  // 6. Usa o state para renderizar o HTML
  return (
    <div className="mt-5">
      <img
        className="img-fluid"
        src={state.coverImage}
        alt={`Capa do livro ${state.title}`}
      />
      <h2>{state.title}</h2>
      <p>{state.author}</p>
      <p>{state.releaseYear}</p>
      <p>{state.genre}</p>
      <p>{state.synopsis}</p>
    </div>
  );
}

export default BookDetails;
