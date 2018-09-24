import React, { Component } from 'react'
import { connect } from 'react-redux';

import { registerUser } from '../../actions';
import { InputFieldGroup } from '../common';

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
    }, () => {
      console.log(this.state)
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

    const { errors } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <InputFieldGroup 
              type='text'
              placeholder='username'
              name="username"
              value={this.state.username}
              onChange={this.handleInput}
              error={errors.username}
            />
            <InputFieldGroup 
              type='email'
              placeholder='email'
              name="email"
              value={this.state.email}
              onChange={this.handleInput}
              error={errors.email}
            />
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
