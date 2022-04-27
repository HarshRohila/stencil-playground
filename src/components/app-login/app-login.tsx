import { Component, h, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-login',
  styleUrl: 'app-login.scss',
  shadow: true,
})
export class AppLogin {
  @Prop() match: MatchResults;
  @Prop() loading = false;

  data: any = {};

  handleChange(event: any): any {
    const { name, value } = event.target;
    this.data = { ...this.data, [name]: value };
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log('called', this.data);

    this.loading = true;
    await new Promise((resolve) => {
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
          <form class="login-form" onSubmit={e => this.handleSubmit(e)}>
            <div class="login-container">
              <div class="field-wrap">
                <input type="email" name="user" value={this.data.user} onChange={e => this.handleChange(e)} required />
              </div>
              <div class="field-wrap">
                <input type="password" name="password" value={this.data.password} onChange={e => this.handleChange(e)} required />
              </div>

              <input type="submit" value="submit" />
            </div>
          </form>
        )}
      </div>
    );
  }
}
