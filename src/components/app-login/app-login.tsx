import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-login',
  styleUrls: ['app-login.scss'],
  shadow: true,
})
export class AppLogin {
  @State() showWarningMessage = false;

  @State() notValid = false;

  @State() showLoading = false;

  @State() showPassword = false;

  data: any = {};

  handlePassword = () => {
    this.showPassword = !this.showPassword;
  };

  handleChange(event: any): any {
    const { name, value } = event.target;
    this.data = { ...this.data, [name]: value };
    let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (pattern.test(event.target.value) || event.target.value === '') {
      this.notValid = false;
    } else {
      this.notValid = true;
    }

    this.showWarningMessage = false;
  }

  async handleSubmit(event: any) {
    event.preventDefault();

    await this.onSubmit(this.data);
  }

  private async onSubmit(data: any) {
    let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (!pattern.test(data.user)) {
      this.showWarningMessage = true;
      return;
    }

    this.showLoading = true;
    await new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
    alert(` "Welcome ${data.user.substring(0, data.user.length - 10)}" username is from the email ${data.user}`);
    this.showLoading = false;
    data.user = '';
    data.password = '';
  }

  render() {
    return (
      <div>
        {this.showLoading ? (
          <h2 class="loading">loading</h2>
        ) : (
          <form class="login-form" onSubmit={e => this.handleSubmit(e)} novalidate>
            <div class="login-container">
              <div class={`field-wrap ${this.notValid ? 'notValid' : ''}`}>
                <label>Email</label>
                <br />

                <input type="email" name="user" value={this.data.user} onInput={e => this.handleChange(e)} required placeholder="Enter Your Email" />
                {this.showWarningMessage ? (
                  <div class="alert">
                    <i class="fas fa-exclamation-triangle"></i>
                    <span class="alert-content">Please enter valid email address</span>
                  </div>
                ) : null}
              </div>
              <div class="field-wrap">
                <label>Password</label>
                <br />
                <input
                  type={this.showPassword ? 'text' : 'password'}
                  name="password"
                  value={this.data.password}
                  onChange={e => this.handleChange(e)}
                  required
                  placeholder="Enter Your Password"
                />

                <i class="fa fa-eye-slash eye" aria-hidden="true" onClick={this.handlePassword}></i>
              </div>
              <div class="btn">
                <input type="submit" value="Sign In" />
              </div>
            </div>
          </form>
        )}
      </div>
    );
  }
}
