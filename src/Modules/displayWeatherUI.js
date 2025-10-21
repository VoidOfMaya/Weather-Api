
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

const dispayData = function(data){
    const displayWin = document.createElement('div');
    const dataCard = createCard(data);

    displayWin.style.display ="grid";
    displayWin.style.height = '100%';
    displayWin.style.gridTemplateRows = "1fr 5fr 1fr";
    displayWin.style.gridTemplateColumns = "1fr 3fr 1fr";
    displayWin.style.gridTemplateAreas = `". . ."
                                          ". card ."
                                          ". . ."`;

    displayWin.appendChild(dataCard);

    

    return displayWin;

}
const createCard= function (data){
    const card = document.createElement('div')

    const address    = document.createElement('div');
    const condition = document.createElement('div');
    const icon      = document.createElement('div');
    const temp      = document.createElement('div');
    const feelsLike = document.createElement('div');
    const humidity  = document.createElement('div');


    address.style.gridArea = "address";
    condition.style.gridArea = "condition";
    icon.style.gridArea = " icon";
    temp.style.gridArea = " temp";
    feelsLike.style.gridArea = "feels";
    humidity.style.gridArea = "humidity";

    address.innerText = `${data.address}`;
    condition.innerText = `${data.conditions}`;
    icon.innerText = `${data.icon}`;
    temp.innerText = `${data.temp}`;
    feelsLike.innerText = `${data.feelslike}`;
    humidity.innerText = `${data.humidity}`;


    card.style.gridArea = "card";
    card.style.backgroundColor = "#00BFFF";
    card.style.display = "grid";
    card.style.gridTemplateRows = "fr1 fr1 fr2 fr1 fr1 ";
    card.style.gridTemplateColumns = "1f 1fr";
    card.style.gridTemplateAreas = 
    `"address address"
     "condition condition"
     "icon icon"
     "temp feels"
     "humidity humidity"`;

    card.appendChild(address);
    card.appendChild(condition);
    card.appendChild(icon);
    card.appendChild(temp);
    card.appendChild(humidity);
    card.appendChild(feelsLike);

    return card;
}

export{
    dispayData,
}