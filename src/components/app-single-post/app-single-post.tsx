import { Component, h, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { BlogPost, BlogPostService } from '../../services/blogPost';

@Component({
  tag: 'app-single-post',
  styleUrl: 'app-single-post.scss',
  shadow: true,
})
export class AppSinglePost {
  @Prop() match: MatchResults;

  @State() singleBlogPost: BlogPost;
  @State() loading = true;
  componentWillLoad() {
    BlogPostService.getBlogPost(Number(this.match.params.id)).then(value => {
      this.singleBlogPost = value;
      this.loading = !this.loading;
    });
  }
  render() {
    // console.log(this.singleBlogPost);

    return (
      <div>
        {this.loading ? (
          <h1>Loading</h1>
        ) : (
          <table>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Actions</th>
            </tr>

            <tr>
              <td>{this.singleBlogPost.title}</td>
              <td>{this.singleBlogPost.content}</td>
              <td>
                <button>update</button>
                <button>Del</button>
              </td>
            </tr>
          </table>
        )}
      </div>
    );
  }
}
