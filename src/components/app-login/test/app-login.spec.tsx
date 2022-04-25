import { newSpecPage } from '@stencil/core/testing';
import { AppLogin } from '../app-login';

describe('app-login', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppLogin],
      html: `<app-login></app-login>`,
    });
    expect(page.root).toEqualHtml(`
      <app-login>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-login>
    `);
  });
});
