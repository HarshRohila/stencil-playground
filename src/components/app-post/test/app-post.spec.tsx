import { newSpecPage } from '@stencil/core/testing';
import { BlogPostService } from '../../../services/blogPost';
import { AppPost } from '../app-post';

describe('app-post', () => {
  it('renders all the titles', async () => {
    BlogPostService.getBlogPosts = jest.fn().mockResolvedValue([
      {
        title: 'Wymanborough',
      },
      {
        title: 'spider man',
      },
    ]);
    // act
    const page = await newSpecPage({
      components: [AppPost],
      html: `<app-post></app-post>`,
    });
    //asert
    const tables = page.root.shadowRoot.querySelectorAll('td');
    const titles = [...tables].map(i => i.textContent);
    await page.waitForChanges();
    expect(titles).toStrictEqual(['Wymanborough', 'spider man']);
  });
});
