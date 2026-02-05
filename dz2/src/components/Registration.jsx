import React, { useState } from 'react';

const RegistrationForm = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });


  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const newErrors = {};

   
    if (!formData.username.trim()) {
      newErrors.username = 'Имя не может быть пустым';
    } else if (formData.username.length > 40) {
      newErrors.username = 'Имя не должно превышать 40 символов';
    }

   
    if (formData.password.length < 8) {
      newErrors.password = 'Пароль должен быть не менее 8 символов';
    }

   
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Пароли не совпадают';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      console.log('Данные формы верны:', formData);
      alert('Успешная регистрация!');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Регистрация</h2>
        
        <div style={styles.inputGroup}>
          <input
            type="text"
            name="username"
            placeholder="Имя пользователя"
            value={formData.username}
            onChange={handleChange}
            style={errors.username ? {...styles.input, borderColor: 'red'} : styles.input}
          />
          {errors.username && <span style={styles.errorText}>{errors.username}</span>}
        </div>

        <div style={styles.inputGroup}>
          <input
            type="password"
            name="password"
            placeholder="Пароль (мин. 8 симв.)"
            value={formData.password}
            onChange={handleChange}
            style={errors.password ? {...styles.input, borderColor: 'red'} : styles.input}
          />
          {errors.password && <span style={styles.errorText}>{errors.password}</span>}
        </div>

        <div style={styles.inputGroup}>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Подтвердите пароль"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={errors.confirmPassword ? {...styles.input, borderColor: 'red'} : styles.input}
          />
          {errors.confirmPassword && <span style={styles.errorText}>{errors.confirmPassword}</span>}
        </div>

        <button type="submit" style={styles.button}>Отправить</button>
      </form>
    </div>
  );
};


const styles = {
  container: { display: 'flex', justifyContent: 'center', marginTop: '50px' },
  form: { width: '300px', display: 'flex', flexDirection: 'column', gap: '15px' },
  inputGroup: { display: 'flex', flexDirection: 'column' },
  input: { padding: '10px', borderRadius: '4px', border: '1px solid #ccc', outline: 'none' },
  button: { padding: '10px', backgroundColor: '#61dafb', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' },
  errorText: { color: 'red', fontSize: '12px', marginTop: '4px' }
};

export default RegistrationForm;