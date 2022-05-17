import { newSpecPage } from '@stencil/core/testing';
import { AppPost } from '../app-post';

describe('app-post', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppPost],
      html: `<app-post></app-post>`,
    });
    expect(page.root).toEqualHtml(`
      <app-post>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-post>
    `);
  });
});
