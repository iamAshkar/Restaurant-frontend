import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './Cards'



function AllRest() {
  //1. create base usl
  const base_url = 'https://restaurant-backend-zfmu.onrender.com/restaurants'

  //state creation for holding array adata
  const [restData, setData] = useState([])
  //2 create a function for fetching
  const fetchData = async () => {
    const response = await axios.get(base_url)
    setData(response.data);
  }
  //3 . create useEffect for calling functuon
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div >
      <Cards rest={restData} />
    </div>
  )
}

export default AllRest
