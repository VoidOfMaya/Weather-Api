
/*recreate the following
        
                <label class="publushed-label" for="published">published </label>
                <input type="date" id="published" name="published" required/> 
                <button class="footer" id="submit-info" type="submit"> create book!</button> 
*/
const locationForm = document.createElement('form');
const label = document.createElement('label');
const input = document.createElement('input');
const submit= document.createElement('button');

locationForm.style.justifySelf = 'center';
locationForm.style.paddingTop = '10%';

label.innerText = "Enter a location : ";
label.for = "location";

input.name = "location";
submit.innerText = "Search";


locationForm.appendChild(label);
locationForm.appendChild(input);
locationForm.appendChild(submit);



export {locationForm,};