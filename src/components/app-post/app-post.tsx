import { Component, h, Prop, State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { BlogPostService, BlogPost } from '../../services/blogPost';

@Component({
  tag: 'app-post',
  styleUrl: 'app-post.scss',
  shadow: true,
})
export class AppPost {
  @State() blogPosts: BlogPost[];
  @State() loading = true;
  @Prop() history: RouterHistory;

  componentWillLoad() {
    BlogPostService.getBlogPosts().then(values => {
      this.blogPosts = values;
      this.loading = false;
    });
  }
  render() {
    return (
      <div>
        {this.loading ? (
          <h1>Loading</h1>
        ) : (
          <table class="titles">
            <tr>
              <th>Title</th>
            </tr>
            {this.blogPosts.map(({ id, title, content }) => (
              <tr key={id}>
                <td
                  onClick={() => {
                    this.history.push(`/posts/${id}`, { state: this.blogPosts });
                  }}
                >
                  {title}
                </td>
              </tr>
            ))}
          </table>
        )}
      </div>
    );
  }
}
