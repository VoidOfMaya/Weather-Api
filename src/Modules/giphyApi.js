import { rizzKey } from "./keys";


const giphy = `https://api.giphy.com/v1/gifs/translate?api_key=${rizzKey}&s=`;


 const memeSearch = function(searchOption){
   console.log('giphy api: ')
   const result = giphy+searchOption;
   return result
 }

const fetchMemes = async function (link, element){
   const response =await fetch(link)
   try{      
      const searchData = await response.json()
      const imgUrl = searchData?.data?.images?.original?.url;
      if (imgUrl){
         success(imgUrl, element);
      }else{
         console.warn("no valid image in response: ", searchData);
         faliur(element);
      }         
   }catch{
        ((error)=>{
          console.error("Network or parsing error:", error);
         faliur(element);
      }) }
}


 const success =function(link, element){
   element.src = link;
 }
 const faliur = function(element){
   element.removeAttribute("src");
   element.alt = "Oops... Something went wrong!!!"
 }


 export{
    memeSearch,
    fetchMemes,
 }