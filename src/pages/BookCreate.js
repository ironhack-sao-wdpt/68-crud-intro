import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import FormControl from "../components/form/FormControl";
import TextAreaControl from "../components/form/TextAreaControl";

// C do CRUD: Create (POST) - Criar um novo livro na API
function BookCreate() {
  // 1. Definir state inicial vazio
  const [state, setState] = useState({
    title: "",
    author: "",
    releaseYear: "",
    genre: "",
    coverImage: "",
    synopsis: "",
  });

  const navigate = useNavigate();

  // 2. Atualizar o state com o valor do input no evento onChange
  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  // 4. Enviar os dados que usuário preencheu para a API
  async function handleSubmit(event) {
    event.preventDefault();

    axios
      // O método .post do Axios recebe 2 argumentos: o primeiro é a URL da rota da API e o segundo é o que será colocado no corpo (body) da requisição HTTP (e inserido no banco de dados)
      .post("http://localhost:4000/books", state)
      .then((response) => {
        console.log(response.data);
        // Se a criação foi bem-sucedida, redirecionar o usuário de volta pra Home
        navigate("/");
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <h1>Cadastro de livro</h1>
      <form onSubmit={handleSubmit}>
        <FormControl
          label="Título do livro"
          id="bookCreateTitle"
          name="title"
          onChange={handleChange}
          // 3. Forçar o value dos inputs a ser igual ao state
          value={state.title}
        />

        <FormControl
          label="Autor"
          id="bookCreateAuthor"
          name="author"
          onChange={handleChange}
          value={state.author}
        />

        <FormControl
          label="Ano de lançamento"
          id="bookCreateYear"
          name="releaseYear"
          onChange={handleChange}
          value={state.releaseYear}
        />

        <FormControl
          label="Gênero literário"
          id="bookCreateGenre"
          name="genre"
          onChange={handleChange}
          value={state.genre}
        />

        <TextAreaControl
          label="Sinopse"
          id="bookCreateSynopsis"
          name="synopsis"
          onChange={handleChange}
          value={state.synopsis}
        />

        <FormControl
          label="Imagem de capa"
          id="bookCreateCover"
          name="coverImage"
          onChange={handleChange}
          value={state.coverImage}
        />

        <div className="mt-3">
          <button type="submit" className="btn btn-primary">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookCreate;
