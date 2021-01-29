import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './resources/style.css'
import Registration from './components/registration';


ReactDOM.render(<Registration />, document.getElementById('root'));

/*
5.	Coding exercise:   For frontend engineer: Healthcare providers request to be part of the Availity system.  
Using a modern JavaScript framework (React preferred, or Vue or Angular), create a registration user interface 
so healthcare providers can electronically join Availity.  

The following data points should be collected:
•	First Name
•	Last Name
•	NPI number
•	Business Address
•	Telephone Number
•	Email address
*/