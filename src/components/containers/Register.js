import React, { Component } from 'react'

 class Register extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        errors: {},
        error: ''
    }

  handleInput = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    }, () => {
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({
                error: 'Password not match'
            })
        } else {
            this.setState({
                error: ''
            })
        }
    });


  }

  handleSubmit = (event) => {
      event.preventDefault();

      console.log(this.state)

        const newUser = {
            username: this.state.username,
            email: this.state.email, 
            password: this.state.password
        }

    event.target.reset();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input name='username' onKeyUp={this.handleInput} />
            <br />
            <input name='email'  onKeyUp={this.handleInput} />
            <br />
            <input name='password'  onKeyUp={this.handleInput}/>
            <br />
            <input name='confirmPassword'  onKeyUp={this.handleInput}/>
            <br />
            {this.state.error}
            <br />
            <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Register;
