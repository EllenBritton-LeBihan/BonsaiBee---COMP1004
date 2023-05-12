//,,,,,,,,,,,START DISPLAY ,,,,,,,,,,,//





//,,,,,,,,,,,TOGGLE SWITCH start,,,,,,,,,,,//
$(document).ready(function () {
    $("#toggle-button1").addClass("active");
    $(".quad-state-toggle-button").click(function () {
        $(".quad-state-toggle-button").removeClass("active");
        var id = $(this).attr('id');
        $("#" + id).addClass("active");
    });
});
function DarkMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
}
function tangyMode() {
    var element = document.body;
    var content = document.getElementById("TangyModetext");
    element.className = "tangy-mode";
    content.innerText = "Tangy Mode is ON";
}
function lightMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Light Mode is OFF";
}
//,,,,,,,,,,, TOGGLE SIWTCH THEME end,,,,,,,,,,,//


//,,,,,,,,,, SideBar start ,,,,,,,, //
const menuItem = document.querySelectorAll('.menu-item');


// remove active classlist.....
const removeActive = () => {
    menuItem.forEach(item => {
        item.classList.remove('active')
    });
}

// add active classlist.....
menuItem.forEach(item => {
    item.addEventListener('click', () => {
        removeActive();
        item.classList.add('active');

        if (item.id != 'notifice') {
            document.querySelector('.notification').style.display = 'none'
        } else {
            document.querySelector('.notification').style.display = 'block'
            document.querySelector('#notifice .count').style.display = 'none'
        }
    })
})


//....................MESSAGE................
//....................MESSAGE................
const message = document.querySelector('#message');
const messageBox = document.querySelector('#message-box');

message.addEventListener('click', () => {

    messageBox.classList.add('box-sh');
    message.querySelector('.count').style.display = 'none'


    setTimeout(() => {
        messageBox.classList.remove('box-sh');
    }, 2000);

})

// ...................THEME CUSTOMIZTION......
// ............THEME CUSTOMIZTION......

const themeMenu = document.querySelector('#themeMenu');
const themBOx = document.querySelector('.theme')


themeMenu.addEventListener('click', () => {
    themBOx.style.display = 'grid'
})

// FIREND RQUEST BUTTON..............
const addBtn = document.querySelectorAll('#add');
const delbtn = document.querySelectorAll('#del');


addBtn.forEach(element => {
    element.addEventListener('click', () => {
        element.parentElement.style.display = 'none'
    })
});

delbtn.forEach(element => {
    element.addEventListener('click', () => {
        element.parentElement.parentElement.style.display = 'none'
    })
});


// WINDOW EVENT.....
window.addEventListener('scroll', () => {
    themBOx.style.display = 'none'
    document.querySelector('.notification').style.display = 'none'
})

//,,,,,,,,,,,END DISPLAY ,,,,,,,,,,,//

