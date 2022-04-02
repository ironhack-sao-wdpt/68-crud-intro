import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../apis/api";

// D do CRUD: Delete (DELETE): Apagar um registro existente
function BookDelete() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Antes de prosseguir com a deleção, pedimos a confirmação do usuário
    const areYouSure = window.confirm(
      "Você tem certeza que deseja deletar este livro?"
    );
    if (areYouSure) {
      return api
        .delete(`/books/${id}`)
        .then((response) => {
          navigate("/");
        })
        .catch((err) => console.error(err));
    }

    // Volta para a página anterior
    navigate(-1);
  }, [id, navigate]);

  return <p>Deletando...</p>;
}

export default BookDelete;
