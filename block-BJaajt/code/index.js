const input = document.querySelector('input');
const button = document.querySelector('button');

const userImage = document.querySelector(".main-img");
const userName = document.querySelector("h2");
const userHandle = document.querySelector(".user-name");

const followerOne = document.querySelector(".follower-1");
const followerTwo = document.querySelector(".follower-2");
const followerThree = document.querySelector(".follower-3");
const followerFour = document.querySelector(".follower-4");
const followerFive = document.querySelector(".follower-5");

const followingOne = document.querySelector(".following-1");
const followingTwo = document.querySelector(".following-2");
const followingThree = document.querySelector(".following-3");
const followingFour = document.querySelector(".following-4");
const followingFive = document.querySelector(".following-5");

function handleChange(event) {
    if(event.keyCode === 13) {
        let xhr = new XMLHttpRequest;
        let xhrFollowers = new XMLHttpRequest;
        let xhrFollowing = new XMLHttpRequest;

        xhr.open('GET', `https://api.github.com/users/${event.target.value}`);
        xhrFollowers.open('GET',`https://api.github.com/users/${event.target.value}/followers`);
        xhrFollowing.open('GET', `https://api.github.com/users/${event.target.value}/following`);

        xhr.onload = function() {
            let userData = JSON.parse(xhr.response);
            let userFollowers = JSON.parse(xhrFollowers.response);
            let userFollowing = JSON.parse(xhrFollowing.response);

            userImage.src = userData.avatar_url;
            userName.innerText = userData.name;
            userHandle.innerText = `@${userData.login}`;

            followerOne.src = userFollowers[0].avatar_url; 
            followerTwo.src = userFollowers[1].avatar_url;
            followerThree.src = userFollowers[2].avatar_url;
            followerFour.src = userFollowers[3].avatar_url;
            followerFive.src = userFollowers[4].avatar_url;

            followingOne = userFollowing[0].avatar_url;
            followingTwo = userFollowing[1].avatar_url; 
            followingThree = userFollowing[2].avatar_url;
            followingFour = userFollowing[3].avatar_url;
            followingFive = userFollowing[4].avatar_url;
        }
        xhr.send();
    }
}

function changeKitty() {
    
}


button.addEventListener('click', changeKitty);
input.addEventListener('keyup', handleChange);
