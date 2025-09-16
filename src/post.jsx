import { use } from "react"

export default function Posts (postsPromise){
    const Posts = use(postsPromise)
    console.log(Posts)
    return(
        <div className="card">
            <h2>All posts are here</h2>
        </div>
    )
}