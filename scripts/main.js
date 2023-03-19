// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
// document.querySelector("html").addEventListener("click", function () {
//     alert("别戳我，我怕疼！");
//   });
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/jpg1-2.jpg') {
      myImage.setAttribute('src', 'images/jpg1-3.jpg');
    } else {
      myImage.setAttribute('src', 'images/jpg1-2.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = '你好啊，' + myName;
    }
  }
if(!localStorage.getItem('name')) 
{
  setUserName();
} 
else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '你好啊，' + storedName;
}
  myButton.onclick = function() 
  {
    setUserName();
 }
  