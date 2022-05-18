import { newE2EPage } from '@stencil/core/testing';

describe('app-single-post', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-single-post></app-single-post>');

    const element = await page.find('app-single-post');
    expect(element).toHaveClass('hydrated');
  });
});
