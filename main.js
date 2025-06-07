const colorBox =document.querySelector("#main-box")
const typeLabel = document.querySelector("#type")
const colorInput = document.querySelector("#colorInput")
let defaultText = "Enter a color name, HEX, RGB, or HSL value"
colorInput.addEventListener("input", () => {
   const value = colorInput.value.toLowerCase().trim();
   colorBox.style.backgroundColor = value;
   type = getType(value)
   if (value.length > 0) {
      typeLabel.innerHTML = type;
   }else{
      typeLabel.innerHTML = defaultText;
   }
   
})
function getType(val){
   let value = val.trim().toLowerCase();
   if(value.startsWith("#")){
      return "HEX"
   }else if(value.startsWith("rgb")){
      return "RGB"
   }else if(value.startsWith("hsl")){
      return "HSL"
   }else{
      return "Color Name"
   }
}

const form = document.querySelector('#form');
const feedbackBtn = document.querySelector('#feedback-btn');
const cancelBtn = document.querySelector('#cancel');
function showForm(){
   form.style= ' display:flex;    animation: slideInBottomRight 0.4s forwards; ';
}
function hideForm(){
   form.style = ' display:flex; animation: slideOutBottomRight 0.3s forwards'
}

feedbackBtn.addEventListener('click', ()=>{
   showForm();
   document.addEventListener('click', (event) => {
      if (!form.contains(event.target) && !feedbackBtn.contains(event.target)) {
         hideForm();
      }
   });
});
cancelBtn.addEventListener('click', ()=>{
   hideForm();
});