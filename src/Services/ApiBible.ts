const API_KEY:string = 'a0884d5838a5a2d10e4923f5e5f5e64f';

export async function getVersicle (bibleVerseID:string){
    const bibleVersionID = "592420522e16049f-01";
    
    let buscar:string=`https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/verses/${bibleVerseID}?include-chapter-numbers=false&include-verse-numbers=false&content-type=json`
    const response = await fetch(buscar,{
        method:"GET",
        headers:{
            "api-key":API_KEY
        }
    });
    return await response.json();
}

export async function getChapters (){
    const bibleVersionID = "592420522e16049f-01";
    const bibleVerseID ="GEN.29.10",
    search:string=`https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/verses/${bibleVerseID}?include-chapter-numbers=false&include-verse-numbers=false&content-type=json`
    const response = await fetch(search,{
        method:"GET",
        headers:{
            "api-key":API_KEY
        }
    });
    return await response.json();
}
