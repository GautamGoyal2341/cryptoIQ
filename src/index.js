import React from "react";
import ReactDOM  from "react-dom";
import {ChakraProvider,theme} from "@chakra-ui/react"

import App from './App';

ReactDOM.render(
    <ChakraProvider theme={theme}>
    <App/>
    </ChakraProvider>,
    document.getElementById('root')
)

export const server = `https://api.coingecko.com/api/v3`
