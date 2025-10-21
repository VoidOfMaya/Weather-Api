
/*===>expected data format<=== 
    data = {
        address:    address,
        temp:       currentConditions.temp,
        feelslike:  currentConditions.feelslike,
        conditions: currentConditions.conditions,
        icon:       currentConditions.icon,
        humidity:   currentConditions.humidity
}

*/

const dispayData = function(data,){
    const displayWin = document.createElement('div');
    const backToForm = document.createElement('div');
    const { element, img} = createCard(data);

    backToForm.style.gridArea ="reset"
    backToForm.innerText = "change location";
    backToForm.style.fontSize = "24px";
    backToForm.style.padding = "15px 50px 15px 50px";
    backToForm.style.justifySelf = "center";
    backToForm.style.alignSelf = "center";
    backToForm.style.backgroundColor = "#87CEFA";
    backToForm.style.borderRadius = "25px";
    backToForm.addEventListener('mouseover',()=>{
        backToForm.style.backgroundColor= "#fff"
    })
    backToForm.addEventListener('mouseout',()=>{
        backToForm.style.backgroundColor= "#87CEFA"
    })

    displayWin.style.display ="grid";
    displayWin.style.height = '100%';
    displayWin.style.gridTemplateRows = "1fr 5fr 1fr";
    displayWin.style.gridTemplateColumns = "1fr 3fr 1fr";
    displayWin.style.gridTemplateAreas = `". reset ."
                                          ". card ."
                                          ". . ."`;

    displayWin.appendChild(element);
    displayWin.appendChild(backToForm)

    

    return {displayWin, img, reset: backToForm};

}
const createCard= function (data){
    const card = document.createElement('div')

    const address    = document.createElement('div');
    const condition = document.createElement('div');
    const icon      = document.createElement('img');
    const temp      = document.createElement('div');
    const feelsLike = document.createElement('div');
    const humidity  = document.createElement('div');

    const CFToggle = toggleTemp();


    address.style.gridArea = "address";
    condition.style.gridArea = "condition";
    icon.style.gridArea = " icon";
    temp.style.gridArea = " temp";      //should be effected by CFToggle
    feelsLike.style.gridArea = "feels"; //should be effected by CFToggle
    humidity.style.gridArea = "humidity";

    address.innerText = `${data.address}`;
    condition.innerText = `${data.conditions}\n${data.descreption}`;
    temp.innerText = `${data.temp}`;
    feelsLike.innerText = `${data.feelslike}`;
    humidity.innerText = `${data.humidity}%`;

    address.style.fontSize = "24px";
    condition.style.textAlign = 'center';

    icon.id= "meme";


    card.style.gridArea = "card";
    card.style.backgroundColor = "#fff";
    card.style.display = "grid";
    card.style.gridTemplateRows = "fr1 fr1 fr2 fr1 fr1 1fr";
    card.style.gridTemplateColumns = "1f 1fr";
    card.style.gridTemplateAreas = 
    `"address address"
     "condition condition"
     "icon icon"
     "temp feels"
     "toggle-temp toggle-temp"
     "humidity humidity"`;

    card.style.borderRadius ="25px";
    card.style.boxShadow = " 0 2px 5px #00BFFF;"
    card.style.justifyItems = "center";
    card.style.alignItems = "center";

    card.appendChild(address);
    card.appendChild(condition);
    card.appendChild(icon);
    card.appendChild(temp);
    card.appendChild(humidity);
    card.appendChild(CFToggle);
    card.appendChild(feelsLike);

    return {element:card, img: icon};
}

const toggleTemp = function(temp, unit){

    const toggle = document.createElement('div');
    toggle.style.backgroundColor = "green"
    return toggle;

}

export{
    dispayData,
}