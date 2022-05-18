import axios from 'axios';
export { BlogPostService, BlogPost };

const BlogPostService = {
  async getBlogPosts() {
    const { data } = await axios.get('http://localhost:3333/api/blog-posts');

    return data.blogPosts as BlogPost[];
  },
  async getBlogPost(id: number) {
    const { data } = await axios.get(`http://localhost:3333/api/blog-posts/${id}`);

    return data.blogPost as BlogPost;
  },

  async deleteBlogPost(blogPostArr: BlogPost[], id: number) {
    await axios.delete(`http://localhost:3333/api/blog-posts/${id}`);
    let temp: BlogPost[];
    temp = blogPostArr.filter(blog => blog.id !== id);
    blogPostArr = [...temp];
  },
};

interface BlogPost {
  id: number;
  title: string;
  content: string;
}
