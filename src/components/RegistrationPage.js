import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationPage.css';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (username && password) {
      alert('Registration successful');
      // Save the user's credentials to the JSON Server or LocalStorage
      // Perform any other registration logic here
      navigate('/');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="registration-container">
      <h2>Register</h2>
      <input
        type="text"
        id="username" // Unique id attribute
        name="username" // Unique name attribute
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        id="password" // Unique id attribute
        name="password" // Unique name attribute
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <button className="back-button" onClick={() => navigate('/')}>
        Back to Login
      </button>
    </div>
  );
};

export default RegistrationPage;
























// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './RegistrationPage.css';


// const RegistrationPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();


// // const RegistrationPage = () => {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');
// //   const navigate = useNavigate();

// const handleRegister = async () => {
//   if (email && password) {
//     try {
//       // Check if the email already exists
//       const response = await axios.get(`http://localhost:3001/users?email=${email}`);
//       if (response.data.length > 0) {
//         alert('Email already registered. Please use a different email.');
//       } else {
//         // Register the new user
//         await axios.post('http://localhost:3001/users', { email, password });
//         alert('Registration successful');
//         navigate('/');
//       }
//     } catch (error) {
//       console.error('Error registering user:', error);
//       alert('An error occurred. Please try again.');
//     }
//   } else {
//     alert('Please fill in all fields');
//   }


//   // const handleRegister = () => {
//   //   if (username && password) {
//   //     alert('Registration successful');
//   //     navigate('/');
//   //   } else {
//   //     alert('Please fill in all fields');
//   //   }
//   // };

//   return (
//     <div className="registration-container">
//       <h2>Register</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleRegister}>Register</button>
//       <button className="back-button" onClick={() => navigate('/')}>
//         Back to Login
//       </button>
//     </div>
//   );
// };

// export default RegistrationPage;
