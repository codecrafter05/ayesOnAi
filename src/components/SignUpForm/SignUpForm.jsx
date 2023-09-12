import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import './SignUpForm.css';

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
        error: 'Sign Up'
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
      
        <div className="form-container">
          <form className="form" autoComplete="off" onSubmit={this.handleSubmit}>
            <p id="heading">Sign Up</p>
            <div className="field">
              <label>Name</label>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required className="input-field" />
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required className="input-field" />
            </div>
            <div className="field">
              <label>Password</label>
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required className="input-field" />
            </div>
            <div className="field">
              <label>Confirm Password</label>
              <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required className="input-field" />
            </div>
            <div className="btn">
              <button className="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign Up&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
            </div>
          </form>
          <p className="error-message">&nbsp;{this.state.error}</p>
        </div>
      </div>
    );
  }
}
