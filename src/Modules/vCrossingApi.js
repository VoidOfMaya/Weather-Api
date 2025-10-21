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
    return `${baseUrl}${editLocation}/${today}?unitGroup=metric&key=${vCKey}`;
}

const getWeatherData = async function (link, /*element*/){
   
   try{   
        const response =await fetch(link)   
        const weatherData = await response.json()
        const desiredData = await weatheDataHandler(weatherData);
        if (weatherData && weatherData.currentConditions){
            console.log(weatherData);
            return desiredData;
        }else{
            console.warn("no valid data  in response: ", desiredData);
            //faliur(element);
        }         
    }catch{
        ((error)=>{
            console.error("Network or parsing error:", error);
         //faliur(element);
        }) 
    }
}

/*
 const success =function( data){
   console.log(weatheDataHandler(data));

 }
 const faliur = function(){

 }*/
 const weatheDataHandler =async function(data){
    
    const { description, resolvedAddress, currentConditions} = data;   
    const newData = {
        address:    resolvedAddress,
        descreption:  description,
        temp:       currentConditions.temp,
        feelslike:  currentConditions.feelslike,
        conditions: currentConditions.conditions,
        icon:       currentConditions.icon,
        humidity:   currentConditions.humidity
    };

    return newData;

 }

 export {
    getWeatherData,
    generateLink,
 }