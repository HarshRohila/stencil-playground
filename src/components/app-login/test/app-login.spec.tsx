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
    const emailField = page.root.shadowRoot.querySelector('input[name="user"]')
    const passwordField = page.root.shadowRoot.querySelector('input[name="password"]')
    const submitButton = page.root.shadowRoot.querySelector('input[type="submit"]')
    expect(emailField).toBeTruthy()
    expect(passwordField).toBeTruthy()
    expect(submitButton).toBeTruthy()
  });

  describe('submit button click', () => {
    it('shows loading', async () => {
      expect(false).toBeTruthy()
    });
  
    it('shows alert with welcome message for username', async () => {
      expect(false).toBeTruthy()
    });
  })
 
});
