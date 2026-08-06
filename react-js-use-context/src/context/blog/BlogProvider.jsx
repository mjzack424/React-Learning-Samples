import { BlogContext } from "./BlogContext"
import blog from "../../data/blog"

export const BlogProvider = ({ children }) => {
    return (
        <BlogContext.Provider value={blog}>
            {children}
        </BlogContext.Provider>
    )
}