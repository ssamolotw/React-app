import { useNavigate } from "react-router";
import "./login.css";

function Login() {
    const navigate = useNavigate();
    
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    console.log("Imię:", name);
    console.log("Email:", email);
    navigate("/posts");
  };

  return (
    <div className="login-container">
      <h1>Logowanie</h1>

      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Imię:
          <input type="text" name="name" placeholder="Wpisz imię" required />
        </label>

        <label>
          Email:
          <input type="email" name="email" placeholder="Wpisz email" required />
        </label>

        <button type="submit">Zaloguj</button>
      </form>
    </div>
  );
}

export default Login;
