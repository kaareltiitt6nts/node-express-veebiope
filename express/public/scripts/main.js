const output = document.querySelector("#posts-container")
const button = document.querySelector("#get-posts-btn")
const form = document.querySelector("#add-post-form")

// get and show posts
const showPosts = async () => {
    try {
        const res = await fetch("http://localhost:8000/api/posts", {
            method: "GET",
        })
    
        if (!res.ok) {
            throw new Error("Failed to fetch posts!")
        }
    
        const posts = await res.json()
        output.innerHTML = ""
        
        posts.forEach(post => {
            const postEl = document.createElement("div")
            postEl.textContent = post.title
            output.appendChild(postEl)
        });
    } catch (error) {
        console.log(error)
    }
}

const addPost = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const title = formData.get("title")

    try {
        const res = await fetch("http://localhost:8000/api/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title})
        })

        if (!res.ok) {
            throw new Error("Failed to add post!")
        }

        const newPost = await res.json()

        const postEl = document.createElement("div")
        postEl.textContent = newPost.title
        output.appendChild(postEl)
        showPosts()
    } catch (error) {
        console.log(error)
    }
}

button.addEventListener("click", showPosts)
form.addEventListener("submit", addPost)