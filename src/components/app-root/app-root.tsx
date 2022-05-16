import { Component, h } from '@stencil/core';
import { makeServer } from '../../mirage';
import { BlogPostService } from '../../services/blogPost';

makeServer({ environment: "development" })
@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true,
})
export class AppRoot {

  componentWillLoad() {
    BlogPostService.getBlogPosts().then(t => console.log(t))
  }

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
              <stencil-route url="/login" component="app-login" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
