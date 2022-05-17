import { Component, h, State } from '@stencil/core';
import axios from 'axios';

//import { BlogPostService, BlogPost } from '../../services/blogPost';

@Component({
  tag: 'app-post',
  styleUrl: 'app-post.scss',
  shadow: true,
})
export class AppPost {
  componentWillLoad() {
    this.getBlogPosts();
  }

  @State() blogPostArr: any[];
  async getBlogPosts() {
    const { data } = await axios.get('api/blog-posts');
    this.blogPostArr = [...this.blogPostArr, data.blogPost];
  }

  render() {
    console.log(this.blogPostArr);

    return <div></div>;
  }
}
