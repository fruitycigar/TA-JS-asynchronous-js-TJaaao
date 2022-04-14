let input = document.querySelector('input');
let userImage = document.querySelector('.main-img');
let userName = document.querySelector('h2');
let userHandle = document.querySelector('.user-name');
let followersUI = document.querySelector('.followers')
let followingUI = document.querySelector('.following')


// The following function fetches data multiple times, in a very simple way.

function fetch(url, successHandler) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => successHandler(JSON.parse(xhr.response));
    xhr.onerror = function() {
        console.error(`Error 404: Screw you!`)
    }
    xhr.send();
}

// Replicate the above function, but tweaked to display following

function displayExtrainfo(url, root) {
    root.innerHTML = "";
    fetch(url, function(followingList) {
        let topFive = followingList.slice(0, 5);
        
        topFive.forEach((info) => {
            let img = document.createElement('img');
            img.src =info.avatar_url;
            img.alt = info.name;
            root.append(img);
        })
    });
}

function handleDisplay(userInfo) {
    userImage.src = userInfo.avatar_url;
    userImage.alt = userInfo.name;
    userName.innerText = userInfo.name;
    userHandle.innerText = '@' + userInfo.login;
    displayExtrainfo(`https://api.github.com/users/${userInfo.login}/followers`, followersUI);
    displayExtrainfo(`https://api.github.com/users/${userInfo.login}/following`, followingUI);
}

function handleInput(event) {
    if(event.keyCode === 13 && input.value) {
        const url = `https://api.github.com/users/`;
        let username = input.value;

        fetch(url + username, handleDisplay)

        input.value = "";
    }
}

input.addEventListener('keydown', handleInput);

let catImage = document.querySelector('.cat-img');
let catButton = document.querySelector('button');

function handleClick() {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=1&size=full`, function(catsInfo) {
        catImage.src = catsInfo[0].url;
    })
}

catButton.addEventListener('click', handleClick);