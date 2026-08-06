import { useContext } from "react";
import { BlogContext } from "../context/blog";

const Blog = () => {
    const blog = useContext(BlogContext);
    return (
        <>
            <h3>
                Blog
            </h3>
            <span>name:{" "}{blog.name}</span>
            <span
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />
            <span>date:{" "}{blog.date}</span>

        </>
    )
}
export default Blog;