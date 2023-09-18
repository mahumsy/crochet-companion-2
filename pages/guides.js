import { useContext, useEffect, useState } from 'react'
import styles from '../styles/Guides.module.css'
import AuthContext from '../stores/authContext'
import Link from "next/link";
import Image from "next/image";
import './filter.js'

export default function Guides() {
  
  const [guides, setGuides] = useState(null)
  const [error, setError] = useState(null)

  const { user, login, logout, authReady } = useContext(AuthContext);

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };



  useEffect(() => {
    if (authReady) {
      fetch('/.netlify/functions/guides', user && {
        headers: {
          Authorization:  'Bearer ' + user.token.access_token
        }
      })
      .then(res => {
        if (!res.ok) {
          login()
          throw Error('You must be logged in to view this content')
        }
        return res.json()
      })
      .then(data => {
        setError(null)
        setGuides(data)
      })
      .catch(err => {
        setError(err.message)
        setGuides(null)
      })
    }

  },[user, authReady])

  return (
    <div className={styles.guides}>
      
      {!authReady && <div>Loading...</div>}

      {error && (
        <div className={styles.error}>
          <p>{ error }</p>
        </div>
      )}


  {user && 
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
      <div id="chosenFilters">
        <div id="namefilter">
          <div id="cfmichael"></div>
          <div id="cfpaul"></div>
        </div>
        {/* etc */}
      </div>
      <h3>Name Filters</h3>
      <input type="checkbox" id="filterMichael" />
      <label htmlFor="filterMichael">Michael</label><br />

      <input type="checkbox" id="filterPaul" />
      <label htmlFor="filterPaul">Paul</label><br />

      <input type="checkbox" id="filterDennis" />
      <label htmlFor="filterDennis">Dennis</label><br />

      <input type="checkbox" id="filterTim" />
      <label htmlFor="filterTim">Tim</label><br />

      <input type="checkbox" id="filterErik" />
      <label htmlFor="filterErik">Erik</label><br />

      <button onClick={applyFilters}>Apply Filters</button>
    </div>
    <table id="myTable">
      {/* - colors
      red orange yellow green blue purple black white pink brown gray
      - time it takes
      >1 hour
      1-2 hours
      <2 hours
      - difficulty
      beginner (learn the basics), easy ,intermediate ,advanced
      - stitch types (single, double, triple, honeycomb, etc)
      - type (stuffed animals,
      granny squares, tote bags, tapestries, clothing, blankets, flowers) */}
      <tr>
        <th>Pattern</th>
        <th>Image</th>
        <th>Type</th>
        <th>Difficulty</th>
        <th>Colors</th>
        <th>Stitch Types</th>
        <th>Est. Time to Make</th>
      </tr>
      <tr id="row-michael1">
        <td><a href="#" onClick={() => showInfo('michael1')}>Bee</a></td>
        <td>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5e18a0efb9904526f1bedb80/f34a749b-cdaf-4655-bd49-031000a7219a/crochet+amigurumi+bee.jpg?format=1500w"
            width="100"
            alt="Bee"
          />
        </td>
        <td>stuffed animals</td>
        <td>easy</td>
        <td>black, yellow, white</td>
        <td>single crochet (SC)</td>
        <td>less than an hour</td>
        <td></td>
      </tr>
      <tr>
        <td>Michael</td>
        <td>32</td>
        <td>10/1/1989</td>
      </tr>
      <tr>
        <td>Paul</td>
        <td>29</td>
        <td>10/14/1990</td>
      </tr>
      <tr>
        <td>Dennis</td>
        <td>25</td>
        <td>11/29/1993</td>
      </tr>
      <tr>
        <td>Tim</td>
        <td>27</td>
        <td>3/12/1991</td>
      </tr>
      <tr>
        <td>Erik</td>
        <td>24</td>
        <td>10/31/1995</td>
      </tr>
    </table>

    <form id="addForm" onSubmit={(e) => { addRow(e.target); e.preventDefault(); }}>
      <input name="pattern" placeholder="Pattern..." />
      <input name="age" placeholder="Type..." />
      <input name="birthday" placeholder="Difficulty..." />
      <input name="birthday" placeholder="Colors..." />
      <input name="birthday" placeholder="Stitch Types..." />

      <button type="submit">Add Row</button>
    </form>










    
    </div>
    
    }

    </div> 
  )
}