import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({
        error: 'Sign Up Failed - Try Again'
      });
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <style>
          {`
            .form-container {
              background-color: #f4f4f4;
              border: 1px solid #ddd;
              padding: 40px;
              box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
              border-radius: 12px;
              width: 350px;
              text-align: center;
              margin: 50px auto;
            }

            label {
              display: block;
              margin-bottom: 12px;
              font-weight: bold;
              font-size: 1.1em;
              color: #333;
            }

            input {
              width: 100%;
              padding: 15px;
              margin-bottom: 20px;
              border: 1px solid #ccc;
              border-radius: 6px;
              font-size: 1em;
            }

            button {
              width: 100%;
              padding: 15px;
              background-color: #007bff;
              color: #fff;
              border: none;
              border-radius: 6px;
              font-size: 1.1em;
              cursor: pointer;
              transition: background-color 0.3s;
            }

            button:hover {
              background-color: #0056b3;
            }

            button:disabled {
              background-color: #ccc;
              cursor: not-allowed;
            }

            .error-message {
              color: red;
              font-weight: bold;
            }
          `}
        </style>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label>Confirm Password</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
