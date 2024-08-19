document.addEventListener("DOMContentLoaded",() => {
    const nameElement = document.querySelector("#name");
    const loginElement = document.querySelector("#username");
    const avatarElement = document.querySelector("#avatar");
    const reposElement = document.querySelector("#repos");
    const followersElement = document.querySelector("#followers");
    const followingElement = document.querySelector("#following");
    const linkElement = document.querySelector("#link");
    fetch(`https://api.github.com/users/Edilson591`)
    .then(function(response) {
        return response.json()
    })
    .then(function(json){
        const {name, login, avatar_url, following, followers, public_repos, html_url} = json;
        nameElement.textContent = name;
        loginElement.textContent = login;
        avatarElement.src= avatar_url;
        reposElement.textContent = public_repos;
        followingElement.textContent = following;
        followersElement.textContent = followers;
        linkElement.href = html_url
    
    })
    .catch(function(error) {
        console.log(`ocorreu um error ${error}`)
    })
    .finally(function() {
        console.log("programa finalizado")
    })
})