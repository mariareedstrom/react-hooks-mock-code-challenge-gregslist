import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDeleteListing, search }) {
  const filteredListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(search)
  );

  const displayListings = filteredListings.map((listing) => {
    return (
      <ListingCard
        listing={listing}
        key={listing.id}
        onDeleteListing={onDeleteListing}
        search={search}
      />
    );
  });

  return (
    <main>
      <ul className="cards">{displayListings}</ul>
    </main>
  );
}

export default ListingsContainer;
