window.onload = function () {
    let myImage = document.querySelector('img');
    myImage.onclick = function () {
        let mySrc = myImage.getAttribute('src');
        if (mySrc === 'images/pic1.jpg') {
            myImage.setAttribute('src', 'images/pic3.JPG');
        } else {
            myImage.setAttribute('src', 'images/pic1.jpg');
        }
    }
    function setHeading(Lisa) {
        let myHeading = document.querySelector('h1');
        myHeading.textContent = '你好！' + Lisa + '!';
    }
    function setUserName() {
        let myName = prompt('请输入你的名字');
        localStorage.setItem('name', myName);
        setHeading(myName);
    }
    let storedName = localStorage.getItem('name');
    if (!storedName) {
        setUserName();
    } else {
        setHeading(storedName);
    }
    let myButton = document.querySelector('button');
    myButton.onclick = setUserName;
};