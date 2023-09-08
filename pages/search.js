
import { useContext, useEffect, useState } from 'react'
import styles from '../styles/Guides.module.css'
import AuthContext from '../stores/authContext'
import { clicked } from './index.js';

export default function search() {
  const { user, authReady, login } = useContext(AuthContext)
  const [guides, setGuides] = useState(null)
  const [error, setError] = useState(null)

  const [clicked, setClicked] = useState(false)



  useEffect(() => {
    if (authReady) {
      const query = clicked ? '?clicked=true' : ''

      fetch(`/.netlify/functions/guides${query}`, {
        headers: {
          Authorization: `Bearer ${user.token}` 
        }
      })
      .then(res => {
        if (!res.ok) {
          return res.json().then(data => {
            throw new Error(data.message)
          })
        }
        return res.json()
      })
      .then(data => {
        setGuides(data)
        setError(null)
      })
      .catch(err => {
        setError(err.message)
        setGuides(null)
      })
    }
  }, [user, authReady, clicked])

  const handleClick = () => {
    setClicked(true)
  }
 
  return (
 

<div
        dangerouslySetInnerHTML={{
          __html: `
            <!DOCTYPE html>

            <html lang="en">

            <head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="https://glitch.com/favicon.ico" />
              <title>Crochet Companion</title>
              <link rel="stylesheet" href="/style.css" />
              <script src="/script.js" defer></script>
            </head>

            <body>

              <div id="one">
                <img id="yuh" src="https://cdn.glitch.global/c6b9db38-a26a-4266-956d-36e2d8c4b185/IMG_0575.jpg?v=1689899431190">
                <h1>Crochet Companion</h1>
              </div>

              <ul>
                <img id="yarn" src='https://thenounproject.com/api/private/icons/643771/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0'>


                
                <img id="yarn2" src='https://thenounproject.com/api/private/icons/643771/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0'>
              </ul>

              
            </html>
          ` 
        }}
      />

         
  )
}