import { newSpecPage } from '@stencil/core/testing';
import { AppLogin } from '../app-login';

describe('app-login', () => {
  it('renders form with all fields and submit button', async () => {
    // act
    const page = await newSpecPage({
      components: [AppLogin],
      html: `<app-login></app-login>`,
    });

    // assert
    const emailField = page.root.shadowRoot.querySelector('input[name="user"]');
    const passwordField = page.root.shadowRoot.querySelector('input[name="password"]');
    const submitButton = page.root.shadowRoot.querySelector('input[type="submit"]');
    expect(emailField).toBeTruthy();
    expect(passwordField).toBeTruthy();
    expect(submitButton).toBeTruthy();
  });

  describe('submit button click', () => {
    it('shows loading', async () => {
      const page1 = await newSpecPage({
        components: [AppLogin],
        html: `<app-login></app-login>`,
      });
      page1.rootInstance.data = {
        user: 'saif123@gmail.com',
        password: '13asb',
      };
      global.alert = jest.fn();
      page1.rootInstance.onSubmit();

      await page1.waitForChanges();
      const myLoading = page1.root.shadowRoot.querySelector('.loading');
      expect(myLoading).toBeTruthy();
    });

    // fit('shows alert with welcome message for username', async () => {
    //   jest.useFakeTimers();
    //   const page2 = await newSpecPage({
    //     components: [AppLogin],
    //     html: `<app-login></app-login>`,
    //   });
    //   //global.alert = jest.fn();
    //   const alertMock = jest.spyOn(window, 'alert').mockImplementation();
    //   await page2.rootInstance.onSubmit();
    //   //jest.advanceTimersByTime(2000);
    //   jest.runAllTimers();

    //   expect(alertMock).toHaveBeenCalledTimes(1);
    //   // expect(global.alert).toBeCalledWith()
    //});
  });
});
