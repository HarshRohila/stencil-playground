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

  @State() BlogPost: BlogPost;
  @State() loading = true;
  @State() title: string;
  @State() content: string;
  @State() updating = false;

  componentWillLoad() {
    BlogPostService.getBlogPost(Number(this.match.params.id)).then(value => {
      this.BlogPost = value;
      this.loading = !this.loading;
    });
  }
  handleDelete = () => {
    BlogPostService.deleteBlogPost(this.BlogPost.id);
    this.history.goBack();
  };
  handleUpdate = () => {
    this.updating = true;
  };
  handleChange = (event: any) => {
    event.preventDefault();
    this.handleSubmit();
  };
  handleSubmit() {
    this.BlogPost.title = this.title;
    this.BlogPost.content = this.content;
    BlogPostService.updateBlogPost(this.BlogPost);

    this.updating = false;
    this.history.goBack();
  }

  render() {
    console.log(this.title, this.content);

    return (
      <div>
        {this.loading ? (
          <h1>Loading</h1>
        ) : (
          <form onSubmit={event => this.handleChange(event)}>
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
                        value={this.BlogPost.title}
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
                        value={this.BlogPost.content}
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
