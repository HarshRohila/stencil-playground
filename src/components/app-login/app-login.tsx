import { Component, h, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'app-login',
  styleUrl: 'app-login.css',
  shadow: true,
})



export class AppLogin {

  @Prop() loading: boolean = false;

  @State() data: any = {};


  handleChange(event) {
    const { name, value } = event.target;
    this.data[name] = value;
  }
  handleSubmit() {
    this.loading = true;
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 2000);

    }).then(function () {
      alert(` "Welcome ${this.data.user.substring(0,this.data.user.length-10)}" username is from the email ${this.data.user}`);
      this.loading=false;
    })
  };



  render() {

    return (
      <div>
        {this.loading ? <h2>loading</h2> :
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
