import React, { useContext } from "react";
import FavoritesContext from "./favoritesContext";

const Favorites = () => {
  const favorites = useContext(FavoritesContext);

  return (
    <div>
      <h1>Favorites</h1>
      <ul>
        {favorites.map((guide) => (
          <li key={guide.id}>{guide.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
