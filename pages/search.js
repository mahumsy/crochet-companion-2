import { useContext, useEffect, useState } from 'react'
import styles from '../styles/Guides.module.css'
import AuthContext from '../stores/authContext'

export default function Guides() {
  const { user, authReady, login } = useContext(AuthContext)
  const [guides, setGuides] = useState(null)
  const [error, setError] = useState(null)

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
    <>
    <div>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="https://glitch.com/favicon.ico" />
          <title>Crochet Companion</title>
          <link rel="stylesheet" href="/style.css" />
          <script src="/script.js" defer></script>
        </head>

        <body>
          <div id="one">
            <img id="yuh" src="https://cdn.glitch.global/c6b9db38-a26a-4266-956d-36e2d8c4b185/IMG_0575.jpg?v=1689899431190" />
            <h1>Crochet Companion</h1>  
          </div>

          <ul>
            <img id="yarn" src='https://thenounproject.com/api/private/icons/643771/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0' />              
            <img id="yarn2" src='https://thenounproject.com/api/private/icons/643771/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0' />
          </ul>

          <script>
            // FILTER LOGIC
            
          </script>

          <style>
            {`
              #chosenFilters {
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
                flex-direction: row;
              }
              #cfmichael,
              #cfpaul {
                padding: 0.2rem 0.5rem;
                background: #eee;
                border-radius: 999px;
                font-size: 0.9rem;
              }
              #namefilter {
                display: flex;
                flex-direction: row;
              }
            `}  
          </style>

          <body>
            <input
              type="text"
              id="searchTable2"
              onKeyUp={searchTable}
              placeholder="Search..." 
            />

            <div>
              <div id="chosenFilters">
                <div id="namefilter">
                  <div id="cfmichael"></div>
                  <div id="cfpaul"></div>
                </div>
              </div>

              {/* NAME FILTERS */}

              <button onClick={applyFilters}>Apply Filters</button>
            </div>

            <table id="myTable">
              {/* TABLE ROWS */}
            </table>

            <form id="addForm" onSubmit={e => addRow(e.target)}>
              {/* INPUTS */}
              <button type="submit">Add Row</button>
            </form>
          </body>
        </body>
      </div>
    </>
  )
}
    
    
    