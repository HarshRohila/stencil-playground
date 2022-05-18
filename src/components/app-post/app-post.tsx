import { Component, h, Prop, State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { BlogPostService, BlogPost } from '../../services/blogPost';

@Component({
  tag: 'app-post',
  styleUrl: 'app-post.scss',
  shadow: true,
})
export class AppPost {
  @State() blogPostArr: BlogPost[];
  @State() loading = true;
  @Prop() history: RouterHistory;

  componentWillLoad() {
    BlogPostService.getBlogPosts().then(values => {
      this.blogPostArr = values;
      this.loading = false;
    });
  }
  render() {
    console.log(this.blogPostArr);
    return (
      <div>
        {this.loading ? (
          <h1>Loading</h1>
        ) : (
          <table>
            <tr>
              <th>Title</th>
            </tr>
            {this.blogPostArr.map(({ id, title, content }) => (
              <tr key={id}>
                <td
                  onClick={() => {
                    this.history.push(`/posts/${id}`, { state: this.blogPostArr });
                  }}
                >
                  {title}
                </td>
              </tr>
              // <tr key={id}>
              //   <stencil-route-link url={`/posts/${id}`}>
              //     <td>{title}</td>
              //   </stencil-route-link>
              // </tr>
            ))}
          </table>
        )}
      </div>
    );
  }
}
