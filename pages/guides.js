import { useContext, useEffect, useState } from 'react'
import styles from '../styles/Guides.module.css'
import AuthContext from '../stores/authContext'
import { clicked } from './index.js';

export default function Guides() {
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
    <div className={styles.guides}>

      
      
      {!authReady && <div>Loading...</div>}

      {error && (
        <div className={styles.error}>
          <p>{ error }</p>
        </div>
      )}

      {guides && guides.map(guide => (
        <div key={guide.title} className={styles.card}>
          <h3>{ guide.title }</h3>
          <h4>written by {guide.author}</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At corrupti iste ab magnam dignissimos id maxime rerum quae minima. Delectus maxime culpa est consequatur veritatis, perspiciatis cum corrupti possimus quis?</p>
        </div>
      ))}

    </div> 
  )
}