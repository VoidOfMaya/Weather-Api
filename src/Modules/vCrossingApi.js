import { vCKey } from "./keys";

// visual crossing API data handlers

const todayDate = function(){
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth()+1).padStart(2, 0);
    const day = String(now.getDate()).padStart(2, 0);
    return `${year}-${month}-${day}`
}

const generateLink = function (location){
    //url request format : base-url/location/data1/data2?key= vCkey
    const baseUrl ="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
    const today = todayDate();

    if (location === ""){
        console.warn('invalid location request');
        return null;
    }
    const editLocation = location.trim().replace(/\s+/g,'-');
    return `${baseUrl}${editLocation}/${today}?key=${vCKey}`;
}

const getWeatherData = async function (link, element){
   const response =await fetch(link)
   try{      
      const weatherData = await response.json()
      const desiredData = weatherData;
      if (desiredData){
            console.log(desiredData)
         //success(desiredData, element);
      }else{
         console.warn("no valid image in response: ", searchData);
         //faliur(element);
      }         
   }catch{
        ((error)=>{
          console.error("Network or parsing error:", error);
         //faliur(element);
      }) }
}


 const success =function(link, element){
   element.src = link;
 }
 const faliur = function(element){
   element.removeAttribute("src");
   element.alt = "Oops... Something went wrong!!!"
 }

 export {
    todayDate,
    generateLink,
 }