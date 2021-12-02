import React, { useState } from "react";

function ListingCard( {listingInfo, handleDelete} ) {

  const [isFavorited, setFavorite] = useState(false);

  function handleFavorite(){
    setFavorite(!isFavorited)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listingInfo.image} alt={listingInfo.description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{listingInfo.description}</strong>
        <span> · {listingInfo.location}</span>
        <button onClick={() => handleDelete(listingInfo.id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
