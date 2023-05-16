
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
        "commentCount": 0,
        "relevance": 0
    },
    {
        //User 2
        postId: 2,
        "profPhoto": "CSS/img/f2.png",
        "user": "Nathan Amarly",
        "location": "Spain,",
        "timeId": 5,
        "feedPhoto": "CSS/img/feed8.jpg",
        "likes": 13,
        "caption": "Gym sesh, got a cool photo in!",
        "hashtag": "#Gymlife",
        "commentCount": 0,
        "relevance": 0
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
        "commentCount": 0,
        "relevance": 0
    },
    {
        //User 4
        postId: 4,
        "profPhoto": "CSS/img/f5.png",
        "user": "Lorel Cage",
        "location": "America,",
        "timeId": 2,
        "feedPhoto": "CSS/img/st3.jpg",
        "likes": 20,
        "caption": "Hard at work!",
        "hashtag": "#StudyPhysics",
        "commentCount": 0,
        "relevance": 0
    },
    {
        //User 5
        postId: 5,
        "profPhoto": "CSS/img/f3.png",
        "user": "Tyler Bane",
        "location": "Costa Rica,",
        "timeId": 1,
        "feedPhoto": "CSS/img/s1.jpg",
        "likes": 32,
        "caption": "One for the portfolio",
        "hashtag": "#PortraitPhotography",
        "commentCount": 0,
        "relevance": 0
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
        "commentCount": 0,
        "relevance": 0
    },
    {
        //User 6
        postId: 7,
        "profPhoto": "CSS/img/f4.png",
        "user": "Janson Mutley",
        "location": "Plymouth,",
        "timeId": 7,
        "feedPhoto": "CSS/img/feed5.jpeg",
        "likes": 238,
        "caption": "No better place!",
        "hashtag": "#Lighthouse",
        "commentCount": 0,
        "relevance": 0
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
//sort in terms of recency
const sortedJsonData = jsonData.sort((a, b) => a.timeId - b.timeId);

document.getElementById("feed").innerHTML = `
<h1> feed </h1>
${sortedJsonData.map(feedInfo).join('')}
<footer>
                <h6> Please be advised that the Single Paged Web application is provided for demonstration purposes only and does not store any user data in a server database. The application merely showcases hows a social media feed algorithm could function, and is not intended to be used as a production system. By using this application, you agree that it is provided 'as is' and without any warranties, express or implied, including but not limited to the implied warranties of merchantability and fitness for a particular purpose. You further agree that the application's creators shall not be liable for any direct, incidental, special or consequential damages arising from or in connection with the use or inability to use this application.</h6>
            </footer>
`


//********LIKING FUNCTION START********
const likeButtons = document.querySelectorAll('.like-btn');

// Get the IDs of the posts that the user has liked from the cookie
const likedPostIds = document.cookie.split('; ').find(row => row.startsWith('likedPosts='));
const likedPosts = likedPostIds ? likedPostIds.split('=')[1].split(',') : [];

//for calculating relevance later on.
const likeCountArray = []; 

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

        //create new like object wiht postId and like Count properties.
        const newLike = {
            postId: postId,
            likeCount: post.likes
        };

        //push new like count to likeCountArray.
        likeCountArray.push(newLike);

        // Add the ID of the post to the likedPosts array and store it in a cookie
        likedPosts.push(postId);
        document.cookie = `likedPosts=${likedPosts.join(',')}`;

        // Update the like count on the page
        const likeCount = button.querySelector('.like-count');
        likeCount.textContent = post.likes;

        alert(JSON.stringify(likeCountArray, null, 2));
    });
});

//********LIKING FUNCTION STOP********



//********COMMENT FUNCTION START********
const postForms = document.querySelectorAll('.comment-form');
const postContainers = document.querySelectorAll('.comment-container');

//each time a use comments on a post the commentCountArray ++
const commentCountArray = [];


postForms.forEach((form, index) => {
    commentCountArray[index] = 0; //initialize count for th post to 0.

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

        //increment commentCount for this post and add it to the commentCount Array
        commentCountArray[index]++;
        const post = sortedJsonData[index];
        post.commentCount = commentCountArray[index];

        // Clear the comment input field
        commentInput.value = '';

        alert(commentCountArray);
    });
});
//********COMMENT FUNCTION STOP********




//********RELEVANCE ALGORITHM START********

//calculate relevance of each post.
function sortByRelevance(posts, likedPosts) {
    // Loop through the posts and calculate the relevance for each post
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        let relevance = post.likes;

        // Check if the user has liked this post
        if (likedPosts.includes(post.postId)) {
            relevance += 10; // Increase the relevance by 10 if the user has liked the post
        }

        // Loop through the comments for this post and add 1 to the relevance for each comment
        for (let j = 0; j < post.comments.length; j++) {
            const comment = post.comments[j];
            relevance += 1;
        }

        // Add the relevance as a new property to the post object
        post.relevance = relevance;
    }

    // Sort the posts based on the relevance, in descending order
    posts.sort((a, b) => b.relevance - a.relevance);

    return posts;

 
}

//********RELEVANCE STOP********