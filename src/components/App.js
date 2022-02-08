import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  // when page renders, GET listings ONCE
  // set listings in state
  // pass to ListingsContainer then create ListingCards

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then((data) => setListings(data));
  }, []);

  if (!listings) return <h2>Listings Loading... </h2>;

  function deleteListing(id) {
    const updatedList = listings.filter((listing) => listing.id !== id);
    setListings(updatedList);
  }

  function handleSearch(newSearch) {
    setSearch(newSearch);
  }

  return (
    <div className="app">
      <Header search={search} onSearchChange={handleSearch} />
      <ListingsContainer
        listings={listings}
        onDeleteListing={deleteListing}
        search={search}
      />
    </div>
  );
}

export default App;
