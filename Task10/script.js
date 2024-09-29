let usersSection = document.querySelector(".users");
let r = new XMLHttpRequest();
r.onload = () => {
    if (r.readyState === 4) {
        console.log("all is ok!")
        if (r.status == 200) {
            let response = JSON.parse(r.responseText);
            let users = response.users;
            console.log(users);
            users.map((user) => {
                usersSection.innerHTML += `
                <div class="card">
                    <img src="${user.image}" alt="">
                    <h2>${user.firstName +" "+ user.lastName}</h2>
                    <h4>@ ${user.username}</h4>
                    <h4>${user.email}</h4>
                </div>
                `
            })
        }
    }
};
r.open("GET", "https://dummyjson.com/users", true)
r.send()