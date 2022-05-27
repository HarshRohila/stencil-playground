import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { BlogPostService } from '../../../services/blogPost';
import { AppSinglePost } from '../app-single-post';

describe('app-single-post', () => {
  it('should call delete method of blogPost service when delete button is clicked', async () => {
    //arrange
    const page = await newSpecPage({
      components: [AppSinglePost],
      template: (
        <app-single-post
          //@ts-ignore
          match={{ params: { id: '1' } }}
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
});
