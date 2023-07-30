// pages/favorites.js

import { useContext, useEffect, useState } from 'react';
import AuthContext from '../stores/authContext';

export default function Favorites() {

  const [favorites, setFavorites] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch('/.netlify/functions/favorites')
      .then(res => res.json())
      .then(guides => {
        // filter guides to just favorites
        const favorites = guides.filter(guide => 
          user.favorites.includes(guide.id)  
        );
        setFavorites(favorites);
      })
  }, [user])

  return (
    <div>
      <h1>My Favorites</h1>
      {favorites.map(guide => (
        <div key={guide.id}>
          <h3>{guide.title}</h3>
          // other guide details
        </div>
      ))}
    </div>
  )

}