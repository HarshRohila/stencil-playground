import { Component, h, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-login',
  styleUrls: ['app-login.scss'],
  assetsDirs: ['../../assets'],
  shadow: true,
})
export class AppLogin {
  @Prop() match: MatchResults;

  @State() warningMessage = false;

  @State() notValid = false;

  @State() loading = false;

  @State() showPassword = false;

  data: any = {};

  handlePassword = () => {
    console.log('handlePassword called');
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
    console.log(this.notValid);
    this.warningMessage = false;
  }

  async handleSubmit(event: any) {
    event.preventDefault();

    await this.onSubmit();
  }

  private async onSubmit() {
    console.log('called', this.data);
    let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (!pattern.test(this.data.user)) {
      this.warningMessage = true;
      // console.log(this.data.user);
      return;
    }

    this.loading = true;
    await new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
    alert(` "Welcome ${this.data.user.substring(0, this.data.user.length - 10)}" username is from the email ${this.data.user}`);
    this.loading = false;
    this.data.user = '';
    this.data.password = '';
  }

  render() {
    return (
      <div>
        {this.loading ? (
          <h2 class="loading">loading</h2>
        ) : (
          <form class="login-form" onSubmit={e => this.handleSubmit(e)} novalidate>
            <div class="login-container">
              <div class={`field-wrap${this.notValid ? '-notValid' : ''}`}>
                <label>Email</label>
                <br />

                <input type="email" name="user" value={this.data.user} onInput={e => this.handleChange(e)} required placeholder="Enter Your Email" />
                {this.warningMessage ? (
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
