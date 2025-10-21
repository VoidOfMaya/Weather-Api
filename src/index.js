import './styles.css';
import { getWeatherData , generateLink} from './Modules/vCrossingApi';
import { buildMain } from './Modules/mainContainer';
import { createForm } from './Modules/formUI';
import { dispayData } from './Modules/displayWeatherUI';
console.log(`running program...!`);


let isDisplay = false;
const {title, display} = buildMain();
const form = createForm();


display.appendChild(form);


const getData = async(location)=>{
    const link = generateLink(location);
    const data = await getWeatherData(link);
    return data
};

form.addEventListener('submit', async (e)=>{
    e.preventDefault();

    const location = form.elements.location.value.trim();
    if(!location)return;


    const data = await getData(location);
    isDisplay = true;
    const showData = await dispayData(data);
    showData.style.display = "block";

 
    if (!display.contains(showData)) {
        display.appendChild(showData);
    }
    switchPage(form, showData, isDisplay);
})


const switchPage =function (form, display, status){
    if (!status){
        form.style.display = "block";
        display.style.display = "none";
    }else{
        form.style.display= "none";
        display.style.display = "grid";
    }
}








