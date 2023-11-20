import capitulos from "./capitulos.json"

export function TransformQuery(query:string){
    let str = query.split(" ");
    let consulta:any ={}
    console.log("str",str)
    if(str.length >=2){
        let idcap = TransformCapitulo(str[0])
        consulta.libro = idcap
        let str2 = str[1].split(":");
        console.log("str2",str2)
        if(str2.length>2) return {message:"escribe bien ctm"}
        consulta.capitulo=str2[0]
        consulta.versiculo=str2[1]
        return consulta
    }else{
        return {
            message:"escribe bien ctm"
        }   
    }
    }

export function TransformCapitulo(capitulo:string){
    const findCapitulo = capitulos.find((element:any)=>{
        element.name = removeAccents(element.name),
        capitulo = removeAccents(capitulo);
        let newName:string = element.name.toUpperCase();
        let newCapitulo:string = capitulo.toUpperCase();

        return newName === newCapitulo;
    })
    if(findCapitulo === undefined) alert("no se encontró el libro")
    return findCapitulo?.id;
}
const removeAccents = (str:string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 