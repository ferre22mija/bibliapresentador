import { Box, Center, Text, } from '@chakra-ui/react'

import { useState } from 'react'
import Search from './Components/Search';
function App() {
  const [versiculo, SetVersiculo] = useState("escribe y busca tu versículo");
  
  return (

    <Box w="100vw" h="100vh" bg="blue" bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)' p="3">
        <Search SetVersiculo={SetVersiculo} />
      
        <Center h='80vh' color='black' fontSize='4xl'>
          <Text >{versiculo}</Text>
        </Center>
     

    </Box>
  )
}

export default App
