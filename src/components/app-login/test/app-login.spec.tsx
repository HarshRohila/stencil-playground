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

  // describe('submit button click', () => {
  //   it('shows loading', async () => {
  //     const page = await newSpecPage({
  //       components: [AppLogin],
  //       html: `<app-login></app-login>`,
  //     });
  //     const data = {
  //       user: 'saif123@gmail.com',
  //       password: '13asb',
  //     };

  //     page.rootInstance.onSubmit(data);

  //     await page.waitForChanges();
  //     const myLoading = page.root.shadowRoot.querySelector('.loading');
  //     expect(myLoading).toBeTruthy();
  //   });

  //   // fit('shows alert with welcome message for username', async () => {
  //   //   jest.useFakeTimers();
  //   //   const page2 = await newSpecPage({
  //   //     components: [AppLogin],
  //   //     html: `<app-login></app-login>`,
  //   //   });
  //   //   //global.alert = jest.fn();
  //   //   const alertMock = jest.spyOn(window, 'alert').mockImplementation();
  //   //   await page2.rootInstance.onSubmit();
  //   //   //jest.advanceTimersByTime(2000);
  //   //   jest.runAllTimers();

  //   //   expect(alertMock).toHaveBeenCalledTimes(1);
  //   //   // expect(global.alert).toBeCalledWith()
  //   //});

  //   it('shows warning message if email is invalid', async () => {
  //     const page2 = await newSpecPage({
  //       components: [AppLogin],
  //       html: `<app-login></app-login>`,
  //     });
  //     const data = {
  //       user: 'saif123gmailcom',
  //       password: '13asb',
  //     };
  //     page2.rootInstance.onSubmit(data);

  //     await page2.waitForChanges();
  //     const myWarningMessage = page2.root.shadowRoot.querySelector('.alert');
  //     expect(myWarningMessage).toBeTruthy();
  //   });
  // });
  describe('eye  click', () => {
    it('shows password', async () => {
      const page3 = await newSpecPage({
        components: [AppLogin],
        html: `<app-login></app-login>`,
      });

      page3.rootInstance.handlePassword();

      await page3.waitForChanges();
      const myPassword = page3.root.shadowRoot.querySelector('input[name="password"]');
      expect(myPassword).toHaveProperty('type', 'text');
    });
  });
});
