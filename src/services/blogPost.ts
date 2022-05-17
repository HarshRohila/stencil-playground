import axios from 'axios';
export { BlogPostService, BlogPost };

const BlogPostService = {
  async getBlogPosts() {
    const { data } = await axios.get('api/blog-posts');

    return data.blogPosts as BlogPost;
  },

  async deleteBlogPost(id: number) {
    await axios.delete(`/api/blog-posts/${id}`);
  },
};

interface BlogPost {
  id: number;
  title: string;
  content: string;
}
