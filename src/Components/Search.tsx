import { Center, Input, Flex, Button, Box, Text, ComponentWithAs, InputProps } from "@chakra-ui/react";
import { getChapters, getVersicle } from "../Services/ApiBible";
import { Dispatch, RefObject, SetStateAction, useRef, useState } from "react";
import { TransformQuery } from "../utilities/TransformQuery";
import UnirVersiculos from "../utilities/UnirVersiculos";
interface props {
  SetVersiculo: Dispatch<SetStateAction<string>>;
}
function Search({ SetVersiculo }: props) {
  const [inputBuscar, SetInputBuscar] = useState("");

  function handleClick() {
    let newObject: any = TransformQuery(inputBuscar);
    if (newObject.message) alert(newObject.message);
    const query: string =
      newObject.libro + "." + newObject.capitulo + "." + newObject.versiculo;
    getVersicle(query).then((data: any) => {
      console.log(data);
      const dataVersiculo: string = UnirVersiculos(data.data.content[0].items);
      SetVersiculo(dataVersiculo);
    });
  }
  function handleChange(e: any) {
    SetInputBuscar(e.target.value);
  }
  function handleKeyDown(e: any) {
    if (e.keyCode === 13) {
      handleClick();
    }
  }

  return (
    <>
      <Center>
        <Flex>
          <InputBuscador />
          <Input
            variant="filled"
            placeholder="BUSCA TU LIBRO CAPITULO VERSICULO"
            onChange={handleChange}
            value={inputBuscar}
            onKeyDown={handleKeyDown}
          />
          <Button colorScheme="blue" mx="3" onClick={handleClick}>
            Buscar
          </Button>
        </Flex>
      </Center>
    </>
  );
}
export default Search;

const InputBuscador = () => {
  const [queryVersiculo, SetQueryVersiculo] = useState({
    libro: "",
    capitulo: "",
    versiculo: "",
  });
  function handleQueryVersiculo(e: any) {
    SetQueryVersiculo({ ...queryVersiculo, [e.target.name]: e.target.value });
  }
  const inputLibroRef = useRef<HTMLInputElement>(null);
  const inputCapituloRef = useRef<HTMLInputElement>(null);
  const inputVersiculoRef = useRef<HTMLInputElement>(null);
  function handleKeyDown(e: any) {
    if (e.keyCode === 32) {
      if (e.target.name === "libro") {
        if(queryVersiculo.libro.split(" ").length > 1){

          console.log(inputCapituloRef.current)
          inputCapituloRef.current?.focus();
        }else{
          const valor:number | typeof NaN = parseInt(queryVersiculo.libro.split("")[0]) 
          if(typeof valor === typeof NaN){
            inputCapituloRef.current?.focus();
          }else{
            console.log("")
          }
        }
        
      }
      if (e.target.name === "capitulo") {
        inputVersiculoRef.current?.focus();
      }
    }
  }
  return (
    <>
      <Box mx={2} borderRadius="10px" p={2} bg="white">
        <Text mb="8px">Libro:</Text>
        <Input
          ref={inputLibroRef}
          w="200px"
          placeholder="Libro"
          name="libro"
          value={queryVersiculo.libro}
          onChange={handleQueryVersiculo}
          onKeyDown={handleKeyDown}
        />
      </Box>
      <Box mx={1} borderRadius="10px" p={2} bg="white">
        <Text mb="8px">Capítulo:</Text>
        <Input
          ref={inputCapituloRef}
          w="100px"
          placeholder="Capítulo"
          name="capitulo"
          value={queryVersiculo.capitulo}
          onChange={handleQueryVersiculo}
          onKeyDown={handleKeyDown}
        />
      </Box>
      <Box mx={1} borderRadius="10px" p={2} bg="white">
        <Text mb="8px">Versículo:</Text>
        <Input
          ref={inputVersiculoRef}
          w="100px"
          placeholder="Versículo"
          name="versiculo"
          value={queryVersiculo.versiculo}
          onChange={handleQueryVersiculo}
        />
      </Box>
      <Button
        onClick={() => {
          console.log(queryVersiculo);
        }}
      >
        clickme
      </Button>
    </>
  );
};
