import { Component, h,Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';


@Component({
  tag: 'app-login',
  styleUrl: 'app-login.css',
  shadow: true,
})



export class AppLogin {

  @Prop() match: MatchResults;
  @Prop() loading: boolean = false;

   data: any = {};


  handleChange(event: any) :any {
    const { name, value } = event.target;
    this.data[name] = value;
  }
  async handleSubmit() {
    this.loading = true;
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 2000);

    });
    alert(` "Welcome ${this.data.user.substring(0, this.data.user.length - 10)}" username is from the email ${this.data.user}`);
    this.loading = false;
  };



  render() {
    if (this.match && this.match.params.name){
    return (
      <div>
        {this.loading ? <h2 class='loading'>loading</h2> :
          <form class="login-form">
            <div class="login-container">
              <div class="field-wrap">

                <input type='email' name="user" value={this.data.user} onChange={(e) => this.handleChange(e)} required />
              </div>
              <div class="field-wrap">

                <input type="password" name="password" value={this.data.password} onChange={(e) => this.handleChange(e)} required />
              </div>

              <button type="button" onClick={() => { this.handleSubmit() }}>Login</button>
            </div>
          </form>
        }
      </div>
    );
      }
  }

}
