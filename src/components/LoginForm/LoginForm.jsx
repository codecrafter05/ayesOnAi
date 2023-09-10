import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

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
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
