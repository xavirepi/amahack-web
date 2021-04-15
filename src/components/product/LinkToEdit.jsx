import { useContext } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUserContext";

const LinkToEdit = ({ productUser, productId }) => {
  const { user } = useUser();

  return (
    <div className="LinkToEdit">
      {user?.id === productUser && (
        <Link to={`/products/${productId}/edit`} className="btn btn-primary">
          Edit
        </Link>
      )}
    </div>
  );
}

export default LinkToEdit;
