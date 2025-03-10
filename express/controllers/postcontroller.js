let posts = [
    {id: 0, title: "First"},
    {id: 1, title: "Second"},
    {id: 2, title: "Third"}
]

// @desc get all posts
// @route GET /api/posts
export const getPosts = (req, res, next) => {
    const limit = parseInt(req.query.limit)

    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit))
    }
    
    res.status(200).json(posts)
}

export const getPostById = (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id) // filter?
    
    if (!post) {
        const error = new Error("Post not found!")
        error.status = 404
        return next(error)
    }
    
    res.status(200).json(post)
}

export const createPost = (req, res, next) => {
    console.log(req.body)

    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    }

    if (!newPost.title) {
        const error = new Error("Title is missing!")
        error.status = 400
        return next(error)
    }

    posts.push(newPost)

    res.status(201).json(posts)
}

export const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id)

    if (!post) {
        const error = new Error("Post not found!")
        error.status = 404
        return next(error)
    }

    post.title = req.body.title
    res.status(200).json(posts)
}

export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id)

    if (!post) {
        const error = new Error("Post not found!")
        error.status = 404
        return next(error)
    }

    posts = posts.filter(post => post.id !== id)
    res.status(200).json(posts)
}