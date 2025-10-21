

const buildMain = function (){
    const main = document.querySelector('.main-container');    
    const title =document.createElement('div');
    const display =document.createElement('div');

    main.style.gridTemplateAreas = `"title"
                                    "display"`;

    title.innerText = 'Weather Today';
    title.style.justifySelf = 'center';
    title.style.alignSelf = 'center';
    title.style.fontSize = "42px"
    title.style.gridArea = 'title';

    display.style.gridArea = "display"


    main.appendChild(title);
    main.appendChild(display);

return {title, display};
}

export{
    buildMain,
}