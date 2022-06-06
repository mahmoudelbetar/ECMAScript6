// Option Object

function courseInfo(course) {
    let defaultCourse = {
        courseId: 1,
        courseName: "ES6",
        courseDuration: 3,
        courseOwner: "Eng. Sara"
    };
    let myCourse = Object.assign(defaultCourse, course);
    console.log(`Course Id : ${myCourse.courseId}, Course Name : ${myCourse.courseName}, Course Duration : ${myCourse.courseDuration}, Course Owner : ${myCourse.courseOwner}`);
}

courseInfo();

// =================================================== //

// Promises Task

// a
let promise = new Promise(function(resolve, reject) {
    resolve(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((data) => {
                let users = data.json();
                return users;
            }).catch((error) => {
                return error;
            })
    });
});

promise
    .then((result) => {
        console.log(result);
    }).catch((result) => {
        console.log(result);
    })



// b
async function getUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((data) => {
            let users = data.json();
            return users;
        })
        .then((users) => {
            // console.log(users);
            let list = document.createElement("ul");
            for (let i = 0; i < users.length; i++) {
                let btn = document.createElement("button");
                btn.style.padding = "10px";
                btn.style.backgroundColor = "lightblue";
                btn.style.color = "black";
                btn.innerText = users[i].name;
                document.body.appendChild(btn);
                btn.addEventListener('click', function() {
                    list.innerHTML = `
                    <li>${users[i].id}</li>
                    <li>${users[i].username}</li>
                    <li>${users[i].email}</li>
                `;
                });
            }
            document.body.appendChild(list);
        })
        .catch((error) => { console.log(error) });
    return response;
}
console.log(getUsers());