import { useContext, useEffect, useState } from 'react';
import styles from '../styles/Guides.module.css';
import AuthContext from '../stores/authContext';
import FavoritesContext from '../stores/favorites-context';

const Favorites = () => {
  const { user, authReady, login, favorites } = useContext(AuthContext);
  const [favoriteGuides, setFavoriteGuides] = useState([]);

  useEffect(() => {
    if (user) {
      fetch('/.netlify/functions/favorites', {
        headers: {
          Authorization: 'Bearer ' + user.token.access_token
        }
      })
      .then(res => {
        if (!res.ok) {
          return;
        }
        return res.json();
      })
      .then(data => {
        setFavoriteGuides(data);
      })
      .catch(err => {
        console.log(err);
      });
    }
  }, [user]);

  const handleFavorite = guide => {
    favorite(guide);
  };

  return (
    <div>
      <h1>Favorite Guides</h1>
      {favoriteGuides.map(guide => (
        <div key={guide.id}>
          <h3>{guide.title}</h3>
          <p>{guide.author}</p>
          <button onClick={() => handleFavorite(guide)}>Add to favorites</button>
        </div>
      ))}
    </div>
  );
};

const favorite = guide => {
  const url = '/.netlify/functions/favorites';
  const data = {
    guideId: guide.id
  };
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + user.token.access_token
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      if (!res.ok) {
        return;
      }
      return res.json();
    })
    .then(data => {
      setFavoriteGuides(data);
    })
    .catch(err => {
      console.log(err);
    });
};

export default Favorites;
