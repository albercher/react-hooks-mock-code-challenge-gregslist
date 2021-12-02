import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listingsData, setListings] = useState([]);
  const [listingsRender, setRender] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(data => {
      setListings(data);
      setRender(data);
    })
  }, [])

  function handleDelete(id){
    let filteredArray = listingsData.filter(item => item.id !== id);
    setListings(filteredArray);
    setRender(filteredArray);

    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(data => console.log(data))

  }

  function searchArray(searchValue){
    if (searchValue === ""){
      setRender(listingsData)
    } else {
      let filteredArray = listingsData.filter(item => searchValue.toLowerCase() === item.description.toLowerCase());
      setRender(filteredArray)
    }
  }

  return (
    <div className="app">
      <Header search={searchArray} />
      <ListingsContainer listingsArray={listingsRender} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
