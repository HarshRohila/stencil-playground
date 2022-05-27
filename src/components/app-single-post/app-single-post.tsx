import { Component, h, Prop, State } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import { BlogPost, BlogPostService } from '../../services/blogPost';

@Component({
  tag: 'app-single-post',
  styleUrl: 'app-single-post.scss',
  shadow: true,
})
export class AppSinglePost {
  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;

  @State() singleBlogPost: BlogPost;
  @State() loading = true;
  @State() title: string;
  @State() content: string;
  @State() updating = false;

  componentWillLoad() {
    BlogPostService.getBlogPost(Number(this.match.params.id)).then(value => {
      this.singleBlogPost = value;
      this.loading = !this.loading;
    });
  }
  handleDelete = () => {
    let arr: BlogPost[] = history.state.state.state;
    BlogPostService.deleteBlogPost(this.singleBlogPost.id);
    // let temp: BlogPost[];
    // temp = arr.filter(blog => blog.id !== this.singleBlogPost.id);
    // arr = [...temp];
    this.history.goBack();
  };
  handleUpdate = () => {
    this.updating = true;
  };
  handleChange = (id: number, event: any) => {
    event.preventDefault();
    let arr: BlogPost[] = history.state.state.state;
    const blog = arr.find(b => b.id === id);
    if (!blog) return;

    this.singleBlogPost.title = this.title;
    this.singleBlogPost.content = this.content;
    BlogPostService.updateBlogPost(this.singleBlogPost).then(
      /*value => {
      const index = arr.findIndex(blog => blog.id === value.id);
      arr[index] = value;
      });
      */
      value => console.log(value),
    );

    this.updating = false;
    this.history.goBack();
  };

  render() {
    console.log(this.title, this.content);

    return (
      <div>
        {this.loading ? (
          <h1>Loading</h1>
        ) : (
          <form onSubmit={event => this.handleChange(this.singleBlogPost.id, event)}>
            <div class="main">
              <table>
                <tr>
                  <th>Title</th>
                  <th>Content</th>
                  <th>Actions</th>
                </tr>

                <tr>
                  <div>
                    <td>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={this.singleBlogPost.title}
                        readOnly={!this.updating}
                        onChange={e => {
                          //@ts-ignore
                          this.title = e.target.value;
                        }}
                      />
                    </td>
                    <td>
                      <textarea
                        id="content"
                        name="content"
                        value={this.singleBlogPost.content}
                        readOnly={!this.updating}
                        rows={4}
                        cols={50}
                        onChange={e => {
                          //@ts-ignore
                          this.content = e.target.value;
                        }}
                      />
                    </td>
                  </div>

                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        this.handleUpdate();
                      }}
                    >
                      update
                    </button>
                    <button type="button" onClick={this.handleDelete}>
                      Del
                    </button>
                  </td>
                </tr>
              </table>
            </div>
            {this.updating && <button type="submit">Make Chnages</button>}
          </form>
        )}
      </div>
    );
  }
}
