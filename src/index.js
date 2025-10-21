import './styles.css';
import { getWeatherData , generateLink} from './Modules/vCrossingApi';
import { buildMain } from './Modules/mainContainer';
import { locationForm } from './Modules/formUI';
console.log(`running program...!`);

let data;
let isDisplay = false;

const getData = async(location)=>{
    const link = generateLink(location);
    data = await getWeatherData(link);
    console.log(data);
};

getData('budapest');
const {title, display} = buildMain();


if (!isDisplay){
    display.appendChild(locationForm)
}
