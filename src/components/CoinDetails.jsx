import { Container } from '@chakra-ui/react'
import React, { useEffect, useState } from "react";
import Loader from "./Loader"
import {
  Badge,
  Box,
  Button,
  Container,
  HStack,
  Image,
  Progress,
  Radio,
  RadioGroup,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react"

const CoinDetails = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");



  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [currency, page]);

    
  return <Container maxW = {"container.xl"}  >

 
  {
    loading?<Loader/>:<>
    
    <Box width = {"full"} borderwidth = {1}>
      afdss
    </Box>
     
    </>
  }



  </Container>
}

export default CoinDetails