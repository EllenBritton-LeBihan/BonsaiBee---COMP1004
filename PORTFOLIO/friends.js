
//,,,,,,,,,,,START json data DISPLAY ,,,,,,,,,,,//
//Define JSON struct for posts.

const friendData = [
    {
        //User 1
        "user": "Jack Smith",
        "hobby": "Surfing",
        "profPhoto": "CSS/img/f1.png"
    },
    {
        //User 2
        "user": "Nathan Amarly",
        "hobby": "Weight lifting",
        "profPhoto": "CSS/img/f2.png"
    },
    {
        //User 3
        "user": "Liam Joli",
        "hobby": "Skateboarding",
        "profPhoto": "CSS/img/feed4.jpg"
    },
    {
        //User 4
        "user": "Tyler",
        "hobby": "Photography",
        "profPhoto": "CSS/img/f3.png"
    }
];


function friends(frndInfo) {
    return `
                    <div class="firend-requests">
                        <div class="request">
                           <div class="info">
                                <div class="profile-phots">
                                    <img src="${frndInfo.profPhoto}">
                                </div>
                                <div class="request-body">
                                    <h5>${frndInfo.user}</h5>
                                    <p class="text-gry">Hobbies >> ${frndInfo.hobby}</p>
                                </div>
                                </div>
                                    <div class="action">
                                        <button class="btn btn-primary" id="add">accept</button>
                                        <button class="btn btn" id="del">delete</button>
                                    </div>
                                </div>  
    `
}

document.getElementById("friends").innerHTML = `
<h4>Suggested friends</h4>
${friendData.map(friends).join('')}
`

//,,,,,,,,,,,STOP json data DISPLAY ,,,,,,,,,,,//




