import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { BlogPostService } from '../../../services/blogPost';
import { AppSinglePost } from '../app-single-post';

describe('app-single-post', () => {
  beforeEach(() => {
    BlogPostService.getBlogPost = jest.fn().mockResolvedValue({});
  });
  it('should call delete method of blogPost service when delete button is clicked', async () => {
    //arrange
    const page = await newSpecPage({
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
    BlogPostService.deleteBlogPost = jest.fn();
    await page.waitForChanges();
    //act
    page.rootInstance.handleDelete();
    //assert
    expect(BlogPostService.deleteBlogPost).toHaveBeenCalledTimes(1);
  });
  it('should call update method og blogPost service when makes changes button is clicked', async () => {
    //arrange
    const page = await newSpecPage({
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
    BlogPostService.updateBlogPost = jest.fn();
    await page.waitForChanges();
    //act
    page.rootInstance.handleSubmit();
    //assert
    expect(BlogPostService.updateBlogPost).toHaveBeenCalledTimes(1);
  });
});
