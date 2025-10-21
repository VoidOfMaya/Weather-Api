import './styles.css';
import { getWeatherData , generateLink} from './Modules/vCrossingApi';
import { buildMain } from './Modules/mainContainer';
import { createForm } from './Modules/formUI';
console.log(`running program...!`);

let data;
let isDisplay = false;
const {title, display} = buildMain();
const form = createForm();

display.appendChild(form);


const getData = async(location)=>{
    const link = generateLink(location);
    data = await getWeatherData(link);
    console.log(data);
};


form.addEventListener('submit', async (e)=>{
    e.preventDefault();

    const location = form.elements.location.value.trim();
    if(!location)return;
    getData(location);
    isDisplay = true;
})







if (!isDisplay){
    form.style.display = "block";
}else{
    form.style.display= "none";
}
