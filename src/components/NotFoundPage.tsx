import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div>
      <p>404 Not Found Page</p>
      <Link to="/">Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
