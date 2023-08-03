import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: []
});

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const context = { favorites, setFavorites };

  return (
    <FavoritesContext.Provider value={context}>
      { children }
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
