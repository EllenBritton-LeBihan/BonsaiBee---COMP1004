
//,,,,,,,,,,,START json data DISPLAY ,,,,,,,,,,,//
//Define JSON struct for posts.

const jsonData = [
    {

        //User 1
        "profPhoto": "CSS/img/f1.png",
        "user": "Jack Smith",
        "location": "Cornwall,",
        "timeId": 10,
        "feedPhoto": "CSS/img/feed1.jpeg",
        "likes": 78,
        "caption": "Monster waves in Cornwall this weekend!",
        "hashtag": "#Sealife",
        "comments": "view all comments"
    },
    {
        //User 2
        "profPhoto": "CSS/img/p5.png",
        "user": "Nathan Amarly",
        "location": "Spain,",
        "timeId": 5,
        "feedPhoto": "CSS/img/feed8.jpg",
        "likes": 13,
        "caption": "Gym sesh, got a cool photo in!",
        "hashtag": "#Gymlife",
        "comments": "view all comments"
    },
    {
        //User 3
        "profPhoto": "CSS/img/feed4.jpg",
        "user": "Liam Joli",
        "location": "Bristol,",
        "timeId": 11,
        "feedPhoto": "CSS/img/feed4.jpg",
        "likes": 11,
        "caption": "got my varial kickflips down xD",
        "hashtag": "#Skate",
        "comments": "view all comments"
    },
    {
        //User 4
        "profPhoto": "CSS/img/p7.png",
        "user": "Lorel Cage",
        "location": "America,",
        "timeId": 2,
        "feedPhoto": "CSS/img/feed3.png",
        "likes": 20,
        "caption": "Hard at work!",
        "hashtag": "#StudyMedicine",
        "comments": "view all comments"
    },
    {
        //User 5
        "profPhoto": "CSS/img/f3.png",
        "user": "Tyler Bane",
        "location": "Wales,",
        "timeId": 1,
        "feedPhoto": "CSS/img/s1.jpg",
        "likes": 32,
        "caption": "One for the portfolio",
        "hashtag": "#PortraitPhotography",
        "comments": "view all comments"
    },
    {
        //User 6
        "profPhoto": "CSS/img/feed2.jpg",
        "user": "Ashley Hargrave",
        "location": "America,",
        "timeId": 4,
        "feedPhoto": "CSS/img/feed2.jpg",
        "likes": 38,
        "caption": "Beautiful!",
        "hashtag": "#Animals",
        "comments": "view all comments"
    }
];


function feedInfo(infoPst) {
    return `

    <div class="feeds">
                    <div class="feed">
                        <div class="head">
                            <div class="user">
                                <div class="profile-phots">
                                    <img src="${infoPst.profPhoto}">
                                </div>
                                <div class="info">
                                    <h3>${infoPst.user}<br><small> ${infoPst.location}&nbsp<i>${infoPst.timeId}&nbspminutes ago.</i></small></h3>
                                </div>
                            </div>
                        </div>
                        <div class="feed-phots">
                            <img class="feed-photo" src="${infoPst.feedPhoto}">
                        </div>
                        <div class="liked-by">
                            <p>liked by <b>${infoPst.likes}</b></p>
                        </div>
                        <div class="caption">
                            <p><b>${infoPst.caption}<span class="hash-tag">${infoPst.hashtag}</span></p>
                        </div>
                        <div class="like-fnc">
                                <button class="like-btn" data-id="1">
                                <img src="CSS/img/hearte.jpg">likes
                                <span class="like-count">${infoPst.likes}</span>
                            </button> 
                        </div>
                        <div class="text-gry comment">${infoPst.comments}

                        </div>
                  
                    </div>
    `
}

const sortedJsonData = jsonData.sort((a, b) => a.timeId - b.timeId);


document.getElementById("feed").innerHTML = `
<h1> feed </h1>
${sortedJsonData.map(feedInfo).join('')}
`

//get ALL like buttons
const likeButtons = document.querySelectorAll('.like-btn');

//add an event listener to each like button.
likeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        //get ID of post from button's data-id attribute
    const postId = button.dataset.id;

    // Find the post in the jsonData array using the ID
    const post = sortedJsonData.find((p) => p.timeId == postId);

    // Update the likes property of the post object
    post.likes++;

    // Update the like count on the page
    const likeCount = button.querySelector('.like-count');
    likeCount.textContent = post.likes;
    });
});