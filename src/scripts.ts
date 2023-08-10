import axios from "axios";

const form = document.querySelector<HTMLFormElement>('.form')
const button = document.querySelector<HTMLButtonElement>('.submit-btn')
const posts = document.querySelector('.post')

type Post = {
    email: string 
    firstname: string
    gender: string 
    lastname: string
    password: string
    placetolive: string
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    button.disabled = true
    const formData = new FormData(form)
    const finalData: { [key: string]: unknown } = {};

    for (var pair of formData.entries()) {
        finalData[pair[0]] = pair[1];
    }

    console.log(finalData)
    axios.post('http://localhost:3004/posts', finalData).then((res) => {
        
        const post: Post = res.data

        const postHTML = `
        <div>
        <p>${post.email}</p>
        <p>${post.firstname}</p>
        <p>${post.lastname}</p>
        <p>${post.password}</p>
        <p>${post.gender}</p>
        <p>${post.placetolive}</p>
        </div>
        <br><br>
        `;
        posts.innerHTML += postHTML;
        form.reset
        button.disabled = false;
    })
});


