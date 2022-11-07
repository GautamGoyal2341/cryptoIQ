import { Container } from '@chakra-ui/react'
import React, { useEffect, useState } from "react";
import Loader from "./Loader"

const CoinDetails = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

    
  return <Container maxW = {"container.xl"}  >

 
  {
    loading?<Loader/>:<>
    
    
    
    </>
  }



  </Container>
}

export default CoinDetails