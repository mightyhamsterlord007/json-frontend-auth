import React, { Component } from 'react'
import { connect } from 'react-redux';

import { registerUser } from '../../actions';

 class Register extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        errors: {}
    }

  handleInput = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    });


  }

  handleSubmit = (event) => {
      event.preventDefault();

      console.log(this.state)

        const newUser = {
            username: this.state.username,
            email: this.state.email, 
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }

        this.props.registerUser(newUser)

    event.target.reset();
  }

  render() {

    console.log(this.props)
    console.log(this.props.user)

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
            <button>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps, { registerUser })(Register);
