import { newSpecPage } from '@stencil/core/testing';
import { AppSinglePost } from '../app-single-post';

describe('app-single-post', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppSinglePost],
      html: `<app-single-post></app-single-post>`,
    });
    expect(page.root).toEqualHtml(`
      <app-single-post>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-single-post>
    `);
  });
});
