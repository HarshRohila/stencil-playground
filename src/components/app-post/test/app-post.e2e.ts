import { newE2EPage } from '@stencil/core/testing';

describe('app-post', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-post></app-post>');

    const element = await page.find('app-post');
    expect(element).toHaveClass('hydrated');
  });
});
