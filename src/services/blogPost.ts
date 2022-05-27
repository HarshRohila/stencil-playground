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

  async deleteBlogPost(id: number) {
    await axios.delete(`http://localhost:3333/api/blog-posts/${id}`);
  },
  async updateBlogPost(blogPost: BlogPost) {
    const blogPostData = {
      type: 'blogPosts',
      id: blogPost.id,
      attributes: blogPost,
    };
    const { data } = await axios.patch(`http://localhost:3333/api/blog-posts/${blogPost.id}`, { data: blogPostData });
    return data as BlogPost;
  },
};

interface BlogPost {
  id: number;
  title: string;
  content: string;
}
