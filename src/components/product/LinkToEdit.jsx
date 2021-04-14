import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export default function LinkToEdit({ productUser, productId }) {
  const { user } = useContext(UserContext);
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
