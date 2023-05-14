
//,,,,,,,,,,,START json data DISPLAY ,,,,,,,,,,,//
//Define JSON struct for posts.

const jsonData = [
    {

        //User 1
        postId: 1,
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
        postId: 2,
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
        postId: 3,
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
        postId: 4,
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
        postId: 5,
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
        postId: 6,
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


                    <!--********* LIKE SECTION ********* -->
                        <div class="liked-by">
                        </div>
                        <div class="caption">
                            <p><b>${infoPst.caption}<span class="hash-tag"><br>${infoPst.hashtag}</span></p>
                        </div>
                        <div class="like-fnc">
                                <button class="like-btn" data-post-id="${infoPst.postId}">
                                <img src="CSS/img/hearte.jpg">LIKE
                                <span class="like-count">${infoPst.likes}</span>
                            </button> 
                        </div>


                        <!--********* COMMENT SECTION ********* -->
                    <div class="post" id="${infoPst.postId}">
                        <div class="comment-fnc">
                            <form class="comment-form">
                                <label for="comment-${infoPst.postId}" Add a comment!: </label>
                                <input type="text" id="comment-${infoPst.postId}" name="comment">
                                <button type="submit">Submit</button>
                            </form>
                            <button class="comment-btn" data-post-id="${infoPst.postId}"></button>
                            </div>
                            <div class="comment-container"><br>Comments:<small>
                                <!-- Comment elements will be appended here -->
                            </div>
                        </div>
                    </div>
    `
}

const sortedJsonData = jsonData.sort((a, b) => a.timeId - b.timeId);


document.getElementById("feed").innerHTML = `
<h1> feed </h1>
${sortedJsonData.map(feedInfo).join('')}
`


//********LIKING FUNCTION START********
const likeButtons = document.querySelectorAll('.like-btn');

// Get the IDs of the posts that the user has liked from the cookie
const likedPostIds = document.cookie.split('; ').find(row => row.startsWith('likedPosts='));
const likedPosts = likedPostIds ? likedPostIds.split('=')[1].split(',') : [];


// Add an event listener to each like button.
likeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Get the ID of the post from the button's data-id attribute
        const postId = button.dataset.postId;

        // Check if the post has already been liked by the user
        if (likedPosts.includes(postId)) {
            alert('You have already liked this post!')   
            return;
        }

        // Find the post in the jsonData array using the ID
        const post = sortedJsonData.find((p) => p.postId == postId);
        // Update the likes property of the post object
        post.likes++;

        // Add the ID of the post to the likedPosts array and store it in a cookie
        likedPosts.push(postId);
        document.cookie = `likedPosts=${likedPosts.join(',')}`;

        // Update the like count on the page
        const likeCount = button.querySelector('.like-count');
        likeCount.textContent = post.likes;
    });
});
//********LIKING FUNCTION STOP********



//********COMMENT FUNCTION START********
const postForms = document.querySelectorAll('.comment-form');
const postContainers = document.querySelectorAll('.comment-container');

postForms.forEach((form, index) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        const commentInput = form.querySelector('input[type="text"]');
        const commentText = commentInput.value.trim();

        if (commentText === '') {
            return;
        }

        // Create a new comment element and append it to the comment container for this post
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.textContent = commentText;
        postContainers[index].appendChild(newComment);

        // Clear the comment input field
        commentInput.value = '';
    });
});
//********COMMENT FUNCTION STOP********