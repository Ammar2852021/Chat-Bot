const toggleButton = document.querySelector('.dark-light');
const colors = document.querySelectorAll('.color');



colors.forEach(color => {
  color.addEventListener('click', (e) => {
    colors.forEach(c => c.classList.remove('selected'));
    const theme = color.getAttribute('data-color');
    document.body.setAttribute('data-theme', theme);
    color.classList.add('selected');
  });
});

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});







// ..........................

let form= document.querySelector("form");

let chatArea = document.querySelector("#chat-area"); 
let inputMessage = document.querySelector("#message");

async function getBotAnswers () {
const responsText = await fetch("/Chat-Bot/js/bot_answer.json");
const data = await responsText.json();


form.onsubmit = (e) => {

e.preventDefault();

// let inputMessage=inputMessageS.trim();

let inputMessageS = inputMessage.value.trim();

if (inputMessageS === "") {
alert("Please insert Value");

} 


else {
data.forEach(answer => {
  if (inputMessageS === answer.my_msg) 
  {
 chatArea.innerHTML+=`<div class="chat-msg">
 <div class="chat-msg-profile">
  <img class="chat-msg-img" src="https://c.powerlink.co.il/file/profile/1c0e8d95-f9a5-4cd2-91a3-9921642a3d10.png" alt="" class="account-profile" alt="">
  <div class="chat-msg-date">Message seen 3.07pm</div>
 </div> 
 <div class="chat-msg-content"> 
  <div class="chat-msg-text">${answer.my_msg}</div> 
  </div>`












setTimeout(()=>{ chatArea.innerHTML+=`<div class="chat-msg owner">
<div class="chat-msg-profile">
 <img class="chat-msg-img" src="https://scontent.fcai21-3.fna.fbcdn.net/v/t39.30808-6/324886959_1301587763907789_5691913983098745557_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=W28DHTiZ7PwAX_w2cko&_nc_ht=scontent.fcai21-3.fna&oh=00_AfBh0hMAIyecyr3_YUpxhhPz_xjd_aXgRDDaiORMjxMJ5w&oe=63EFCEBA" alt="" />
 <div class="chat-msg-date">Message seen 3.07pm</div>
</div> 
<div class="chat-msg-content">
 <div class="chat-msg-text">${answer.bot_answer}</div>
</div>`},2000)
}
});

 }
 inputMessage.value = ""
}

}
getBotAnswers()






 
let like = document.getElementById('like');
console.log(like);

like.addEventListener('click',function()
{
like.style.color='red'

})



