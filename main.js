//Ex2
function formText(){
    var btn1 = document.querySelector("#btn1");
    var text = document.getElementById("texto1");
    btn1.addEventListener("click", () => {
        if(text.value === "sumir"){
            document.querySelectorAll("p").forEach(elem => {
                elem.style.display = "none";
            });
            text.value = "";
        }else if(text.value === "voltar"){
            document.querySelectorAll("p").forEach(elem => {
                elem.style.display = "block";
            });
            text.value = "";
        }else if(text.value === "verde"){
            document.querySelectorAll("p").forEach(elem => {
                elem.style.backgroundColor = "green";
                elem.style.color = "white";
            });
            text.value = "";
        }else if(text.value === "ola"){
            document.querySelectorAll("p").forEach(elem => {
                elem.innerHTML = "ola";
            });
            text.value = "";
        }else if(text.value === "bye"){
            document.querySelectorAll("button, input, p").forEach(elem => {
                elem.style.display = "none";
            });
            text.value = "";
        }else{
            document.querySelectorAll("p").forEach(elem => {
                elem.style.background = "red";
                elem.innerHTML = "erro";
            });
            text.value = "";
        }
    });
}
window.onload = formText;
