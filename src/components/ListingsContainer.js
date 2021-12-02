import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( {listingsArray, handleDelete} ) {

  const renderListings = listingsArray.map((listing) => {
    return <ListingCard key={listing.id} listingInfo={listing} handleDelete={handleDelete} />
  })



  return (
    <main>
      <ul className="cards">
        {renderListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
