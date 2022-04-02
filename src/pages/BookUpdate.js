import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../apis/api";

import FormControl from "../components/form/FormControl";
import TextAreaControl from "../components/form/TextAreaControl";

// U do CRUD: Update (PATCH) => Atualizar um livro existente com o que o usuário modificar no formulário
function BookUpdate() {
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
  // O nome do parâmetro de rota é definido no componente Route dentro do path, na parte depois dos ":"
  const { id } = useParams();

  useEffect(() => {
    async function fetchBook() {
      try {
        // 3. Buscar os detalhes do livro específico que o usuário clicou
        // 4. Solicitar detalhes do livro pelo Axios
        const response = await api.get(`/books/${id}`);

        // 5. Atualizar o state
        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchBook();
  }, [id]);

  // 2. Atualizar o state com o valor do input no evento onChange
  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      // PUT vs. PATCH: o PUT é a ação de substituição, enquanto o PATCH é a de atualização. O PUT tem potencial de destruir informação caso o objeto enviado na requisição PUT não contenha todos os campos que o objeto original contém
      const response = await api.patch(`/books/${id}`, state);

      console.log(response.data);

      navigate("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Atualização do livro</h1>
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

export default BookUpdate;
