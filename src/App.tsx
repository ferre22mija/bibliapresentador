
import { Box,Center,Input } from '@chakra-ui/react'

function App() {

  return (

    <Box w="100vw" h="100vh" bg="blue" bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)' p="3">
     <Center>
     <Input variant='filled' placeholder='BUSCA TU LIBRO CAPITULO VERSICULO' />
     </Center>
    </Box>
  )
}

export default App
