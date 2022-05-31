import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { BlogPostService } from '../../../services/blogPost';
import { AppSinglePost } from '../app-single-post';

describe('app-single-post', () => {
  let page;
  beforeEach(async () => {
    BlogPostService.getBlogPost = jest.fn().mockResolvedValue({});
    page = await newSpecPage({
      components: [AppSinglePost],
      template: () => (
        <app-single-post
          //@ts-ignore
          match={{ params: { id: '1' } }}
          //@ts-ignore
          history={{ goBack() {} }}
        ></app-single-post>
      ),
    });
  });
  it('should call delete method of blogPost service when delete button is clicked', async () => {
    BlogPostService.deleteBlogPost = jest.fn();
    await page.waitForChanges();
    //act
    page.rootInstance.handleDelete();
    //assert
    expect(BlogPostService.deleteBlogPost).toHaveBeenCalledTimes(1);
  });
  it('should call update method of blogPost service when makes changes button is clicked', async () => {
    BlogPostService.updateBlogPost = jest.fn();
    await page.waitForChanges();
    //act
    page.rootInstance.handleSubmit();
    //assert
    expect(BlogPostService.updateBlogPost).toHaveBeenCalledTimes(1);
  });
});
