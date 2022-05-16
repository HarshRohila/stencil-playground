import axios from "axios"
export { BlogPostService}

const BlogPostService = {
	async getBlogPosts() {
		const {data} = await axios.get('api/blog-posts') 

		return data.blogPosts
	},

	createBlogPost() {	}
}


