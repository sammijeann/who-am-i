import { useState } from 'react';
import './Form.css';

function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    if (name === 'firstName') {
        setFirstName(value);
      } else if (name === 'lastName') {
        setLastName(value);
      } else if (name === 'email') {
        setEmail(value);
      }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Thanks, ${firstName}, we will reach out to you at ${email} soon!`);
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  return (
    <div className="container text-center">
      <h1>
        Reach Out!
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;