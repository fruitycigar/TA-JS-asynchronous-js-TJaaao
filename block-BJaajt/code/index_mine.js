// let input = document.querySelector('input');
// var button = document.querySelector('button');

// var userImage = document.querySelector(".main-img");
// var userName = document.querySelector("h2");
// var userHandle = document.querySelector(".user-name");

// var followerOne = document.querySelector(".follower-1");
// var followerTwo = document.querySelector(".follower-2");
// var followerThree = document.querySelector(".follower-3");
// var followerFour = document.querySelector(".follower-4");
// var followerFive = document.querySelector(".follower-5");

// var followingOne = document.querySelector(".following-1");
// var followingTwo = document.querySelector(".following-2");
// var followingThree = document.querySelector(".following-3");
// var followingFour = document.querySelector(".following-4");
// var followingFive = document.querySelector(".following-5");

// function handleChange1(event) {

//     if(event.keyCode === 13 && input.value) {

//         let xhr = new XMLHttpRequest;        
//         xhr.open('GET', `https://api.github.com/users/${event.target.value}`);

        
//         xhr.onload = function() {
//             let userData = JSON.parse(xhr.response);
//             userImage.src = userData.avatar_url;
//             userName.innerText = userData.name;
//             userHandle.innerText = `@${userData.login}`;           
//         }

//         xhr.send();
//     }
// }

// function handleChange2(event) {

//     if(event.keyCode === 13 && input.value) {

//         let xhrFollowers = new XMLHttpRequest;
//         xhrFollowers.open('GET',`https://api.github.com/users/${event.target.value}/followers`);


//         xhrFollowers.onload = function() {
//             let userFollowers = JSON.parse(xhrFollowers.response);
//             followerOne.src = userFollowers[0].avatar_url; 
//             followerTwo.src = userFollowers[1].avatar_url;
//             followerThree.src = userFollowers[2].avatar_url;
//             followerFour.src = userFollowers[3].avatar_url;
//             followerFive.src = userFollowers[4].avatar_url;
//         }
  
//         xhrFollowers.send();
//     }
// }

// function handleChange3(event) {

//     if(event.keyCode === 13 && input.value) {

//         let xhrFollowing = new XMLHttpRequest;
//         xhrFollowing.open('GET', `https://api.github.com/users/${event.target.value}/following`);
        
        
//         xhrFollowing.onload = function() {
//             let userFollowing = JSON.parse(xhrFollowing.response);         
//             followingOne = userFollowing[0].avatar_url;
//             followingTwo = userFollowing[1].avatar_url; 
//             followingThree = userFollowing[2].avatar_url;
//             followingFour = userFollowing[3].avatar_url;
//             followingFive = userFollowing[4].avatar_url;
//         }

//         xhrFollowing.send();
//     }
// }




// input.addEventListener('keydown', handleChange1);
// input.addEventListener('keyup', handleChange2);
// input.addEventListener('keydown', handleChange3);

