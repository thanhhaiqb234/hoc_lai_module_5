import axios from "axios";

export async function getAll () {
        let blog = await axios.get("http://localhost:8080/blog");
        console.log(blog)
        return blog.data;
}