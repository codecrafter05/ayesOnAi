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
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      // Update user state with user
      this.props.setUser(user);
    } catch {
      // Invalid signup
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
            /* الأنماط المخصصة هنا */
            .form-container {
              background-color: #ffffff; /* لون خلفية النموذج الأبيض */
              border: 1px solid #dddddd; /* حدود رفيعة */
              padding: 20px;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* ظل للعنصر */
              border-radius: 5px; /* تقوس الزوايا */
              width: 300px; /* عرض النموذج */
              text-align: center; /* محتوى النموذج في وسطه */
              margin: 0 auto; /* يجعل العنصر مركزياً أفقياً داخل الصفحة */
            }

            label {
              display: block; /* جعل التسميات كتلة للحفاظ على التنسيق */
              margin-bottom: 5px;
              font-weight: bold;
            }

            input {
              width: 100%;
              padding: 10px;
              margin-bottom: 10px;
              border: 1px solid #ccc;
              border-radius: 3px;
              outline: none;
            }

            button {
              width: 100%;
              padding: 10px;
              background-color: #ff5722; /* لون زر تسجيل الدخول الرصاصي */
              color: #fff;
              border: none;
              border-radius: 3px;
              cursor: pointer;
            }

            .error-message {
              color: red; /* لون النص الأحمر لرسالة الخطأ */
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
            <label>Confirm</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
