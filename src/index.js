import './styles.css';
import { getWeatherData , generateLink} from './Modules/vCrossingApi';
import { buildMain } from './Modules/mainContainer';
import { createForm } from './Modules/formUI';
import { dispayData } from './Modules/displayWeatherUI';
import { fetchMemes, memeSearch } from './Modules/giphyApi';
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
    const isValid = /^[A-Za-z\s\-]+$/.test(location);
  if (!isValid) {
    alert('Please enter a valid city or country name (letters only).');
    return;
  }
    


    const data = await getData(location);
    console.log(`condtions: ${data.conditions}`);
    isDisplay = true;
    const { displayWin, img, reset} = await dispayData(data);
    displayWin.style.display = "block";

    //giphy.api
    const link = await memeSearch(`${data.conditions} weather`);
    await fetchMemes(link, img);

    //page UI switiching



 
    if (!display.contains(displayWin)) {
        display.appendChild(displayWin);
    }
    switchPage(form, displayWin, isDisplay);   
    reset.addEventListener('click', ()=>{
        isDisplay = false;
        switchPage(form, displayWin, isDisplay); 

    })
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








