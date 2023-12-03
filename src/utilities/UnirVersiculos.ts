export default function UnirVersiculos(arrayVer: any) {
    let versoCompleto: string = "";
    arrayVer.forEach((element: any) => {
        versoCompleto = versoCompleto + element.text + " "
    });
    return versoCompleto;

}