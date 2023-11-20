import { Center, Input, Flex, Button, } from '@chakra-ui/react'
import { getChapters, getVersicle } from '../Services/ApiBible';
import { Dispatch, SetStateAction, useState } from 'react';
import { TransformQuery } from '../utilities/TransformQuery';
interface props {
  SetVersiculo: Dispatch<SetStateAction<string>>
}
function Search({ SetVersiculo }: props) {
  const [inputBuscar, SetInputBuscar] = useState("");

  function handleClick() {
    let newObject: any = TransformQuery(inputBuscar);
    if (newObject.message) alert(newObject.message);
    const query: string = newObject.libro + "." + newObject.capitulo + "." + newObject.versiculo;
    getVersicle(query).then((data: any) => {
      console.log(data);
      const dataVersiculo: string = data.data.content[0].items[0].text
      SetVersiculo(dataVersiculo)
    })

  }
  function handleChange(e: any) {
    SetInputBuscar(e.target.value)
  }
  function handleKeyDown(e:any){
    if(e.keyCode === 13){
      handleClick()
    }
  }
  
  return (
    <>
      <Center>
        <Flex>
          <Input variant='filled' placeholder='BUSCA TU LIBRO CAPITULO VERSICULO' onChange={handleChange} value={inputBuscar} onKeyDown={handleKeyDown}/>
          <Button colorScheme='blue' mx="3" onClick={handleClick}  >Buscar</Button>
        </Flex>
      </Center>
    </>
  )
}
export default Search