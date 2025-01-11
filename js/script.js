
const navlinks=document.querySelectorAll('header nav a');
const logolinks=document.querySelector('.logo');
const section=document.querySelectorAll('section');
const menuicon=document.querySelector('#menu-icon');
const navbar=document.querySelector('header nav');

const fullname=document.getElementById("name");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const subject=document.getElementById("subject");
const message=document.getElementById("message");

function sendmail(){
 const bodymessage=`Full name:${fullname.value} <br> Email:${email.value}<br>Phone number:${phone.value}<br>Subject:${subject.value}<br>Message:${message.value}`;
}
function checkmail(){
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const errortextemail=document.querySelector(".error-text.email")
  if(!email.value.match(emailRegex)) {
    email.classList.add('error')
    email.parentElement.classList.add('error')
    if(email.value!=""){
      errortextemail.innerText="Enter a valid email address"
    }
    else{
      errortextemail.innerText="Email can't be blank"

    }
  }
  else{
    email.classList.remove('error')
    email.parentElement.classList.rremove('error')
  
  }
  
}

function checkInputs(){
  const items=document.querySelectorAll(".item");
  for(const item of items){
    if(item.value==""){
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }
     if(items[1].value!=""){
      checkmail();
     }
    items[1].addEventListener("keyup",()=>{
      checkmail();
     })
    item.addEventListener("keyup", () =>{ 
      if(item.value !=""){
        item.classList.remove("error");
      item.parentElement.classList.remove("error");
      }
      else
      {
        item.classList.add("error");
      item.parentElement.classList.add("error");
      }
    })
  }

}




menuicon.addEventListener('click',() =>{ 
  menuicon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
})


const activepage=()=>{
const header=document.querySelector('header');
const barsbox=document.querySelector('.bars-box');

header.classList.remove('active');
setTimeout(()=>{
  header.classList.add('active');

},1100);

  navlinks.forEach(link =>{
    link.classList.remove('active');
  });
  barsbox.classList.remove('active');
  setTimeout(()=>{
    barsbox.classList.add('active');

  },1100);
  section.forEach(section =>{
    section.classList.remove('active');
  });
  menuicon.classList.remove('bx-x');
  navbar.classList.remove('active');
}
navlinks.forEach((link,idx)=>{
  link.addEventListener('click',()=>{
  if(!link.classList.contains('active')){
    activepage();
    link.classList.add('active');
    setTimeout(()=>{
    section[idx].classList.add('active')
    },1100);
  }
  });
})
logolinks.addEventListener('click', ()=>{
if(!navlinks[0].classList.contains('active')){
activepage();

navlinks[0].classList.add('active');
setTimeout(()=>{
  section[0].classList.add('active')
  },1100);

}
});
const resumebtn=document.querySelectorAll('.resume-btn');
resumebtn.forEach((btn,index)=> {
btn.addEventListener('click',() =>{
const resumedetail=document.querySelectorAll('.resume-detail');
resumebtn.forEach(btn=>{
    btn.classList.remove('active')
})
  btn.classList.add('active')
  resumedetail.forEach(detail=>{
    detail.classList.remove('active')
})
resumedetail[index].classList.add('active')
})


})