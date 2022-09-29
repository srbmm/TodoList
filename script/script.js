const blackBackground=document.querySelector(".black"),
loginBox=document.querySelector(".login"),
btnLogin=document.getElementById("btnLogin"),
lastName=document.querySelector(".lastName"),
tel=document.getElementById("tel"),
userHello=document.getElementById("userHello");
let mainName,tel2;
btnLogin.addEventListener('click',()=>{
    mainName=lastName.value,tel2=tel.value;
    if(!isNaN(+tel2)&&tel2.length==11&&mainName){
        loginBox.style.display="none";
        blackBackground.style.display="none";
        userHello.textContent=`سلام ${mainName}!`
    }
})
function update(){
    console.log("updated");
}
