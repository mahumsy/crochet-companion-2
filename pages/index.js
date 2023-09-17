import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../stores/authContext";

export default function Navbar() {
  const { user, login, logout, authReady } = useContext(AuthContext);

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className="container">
      <div>
        <link rel="stylesheet" href="/style.css" />
        <script src="/script.js" defer></script>
        <div id="one">
          <img
            id="yuh"
            src="https://cdn.glitch.global/c6b9db38-a26a-4266-956d-36e2d8c4b185/IMG_0575.jpg?v=1689899431190"
            alt="Crochet Companion"
          />
          <h1>Crochet Companion</h1>
        </div>
        <ul>
          <li>
            <img
              id="yarn"
              src="https://thenounproject.com/api/private/icons/643771/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
              alt="Yarn 1"
            />
          </li>
          <li>
            <img
              id="yarn2"
              src="https://thenounproject.com/api/private/icons/643771/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
              alt="Yarn 2"
            />
          </li>
        </ul>
      </div>

      <nav>
        <h1>Crochet Companion</h1>

        {authReady && (
          <ul style={{ display: "flex", justifyContent: "center" }}>
            <li>
              {" "}
              <Link href="/">Home</Link>{" "}
            </li>{" "}
            <li>
              <Link href="/guides">Pattern Search</Link>{" "}
            </li>
            <li>
              <Link href="/my-uploads">My Uploads</Link>
            </li>
            <div
              className="loginbtn"
              style={{ position: "absolute", right: 30 }}
            >
              {" "}
              {!user && <li onClick={login}>Login/Signup</li>}
            </div>
            <div
              className="email"
              style={{ position: "absolute", right: 30, top: 170 }}
            >
              {user && <li>{user.email}</li>}
            </div>
            <div
              className="loginbtn"
              style={{ position: "absolute", right: 30 }}
            >
              {user && <li onClick={logout}>Logout</li>}
            </div>
          </ul>
        )}
      </nav>

      <div>
        <p>Welcome to Crochet Companion!</p>
        <p>Here you can search for patterns...</p>
        <p>
          Choose from a variety of factors like what colors of yarn you have,
          how much time the creation will take to make, and more
        </p>
        <p>Save your favorite patterns and access them at any time</p>
        <p>Upload your own original crochet patterns</p>
        <p>And keep track of what you've made so far with a crochet log!</p>
      </div>
    </div>
  );
}
