import React, { useState, useEffect } from 'react';
import './form.styles.css';
import { Link, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { TextField, Select, MenuItem, InputLabel, Checkbox, Menu } from '@material-ui/core';
import RootRef from '@material-ui/core/RootRef';
import * as Yup from 'yup';

const Form = ({ orders, setOrders, postNewOrder, history }) => {
	const domRef = React.useRef();
	const formSchema = Yup.object().shape({
		name: Yup.string().min(2, 'Must be at least 2 characters'),
		special: Yup.string(),
		size: Yup.string().required('Please choose a size!'),
		toppings: Yup.array()
	});

	let [ formValues, setFormValues ] = useState({
		name: '',
		special: '',
		size: '',
		toppings: {
			chicken: false,
			salami: false,
			pepperoni: false,
			bacon: false
		}
	});

	const [ errors, setErrors ] = useState({
		name: '',
		email: '',
		password: ''
	});

	const onCheckboxChange = (e) => {
		const { name, checked } = e.target;
		checkboxChange(name, checked);
	};
	const checkboxChange = (name, isChecked) => {
		setFormValues({
			...formValues,
			toppings: {
				...formValues.toppings,
				[name]: isChecked
			}
		})

	};

	const handleChange = (e) => {
		e.persist();


	
		Yup.reach(formSchema, e.target.name)
			.validate(e.target.value)
			.then((valid) => {
				setErrors({
					...errors,
					[e.target.name]: ''
				});
			})
			.catch((err) => {
				setErrors({
					...errors,
					[e.target.name]: err.errors[0]
				});
			});

		setFormValues({
			...formValues,
			[e.target.name]: e.target.value
		});
	};

	function handleSubmit(e) {
		e.preventDefault();
		const newOrder ={
			name: formValues.name.trim(),
			special: formValues.special.trim(),
			size: formValues.size.trim(),
			toppings: Object.keys(formValues.toppings).filter((el) => formValues.toppings[el])
		}
		console.log(newOrder)
		formSchema.isValid(newOrder).then((valid) => {
			if (valid) {
				postNewOrder(newOrder);
			}
			if (!valid) {
				alert('Not valid');
			}
		});
	}

	return (
		<div className="form-container">
			<h1>Lambda's Pizza</h1>
			<form className="form" onSubmit={handleSubmit}>
				<TextField className="name" type="text" name="name" id="name" label="name" onChange={handleChange} />
				{errors.name.length > 0 ? <p>{errors.name}</p> : null}

				{/* <input type="text" name="" className='name' id="" placeholder="Isaiah"/> */}

				{/* <Button type="submit" value="Submit" onSubmit={handleSubmit} color='primary'>Add Teammate</Button> */}
				{/* <div className="checkbox">
                    <InputLabel label="chek">I accept</InputLabel>
                    <Checkbox
                        className="cool-checkbox"
                        labelid="chek"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                    />
                </div> */}

				<div className="checkboxes" labelId="checkboxes" >
					<InputLabel label="pepperoni">Pepperoni</InputLabel>
					<Checkbox
						name="pepperoni"
						className="cool-checkbox"
						labelid="pepperoni"
						value="checkedA"
						inputProps={{ 'aria-label': 'Checkbox A' }}
						onChange={onCheckboxChange}
						id='pepperoni'

					/>

					<InputLabel label="bacon">Bacon</InputLabel>
					<Checkbox
						name="bacon"
						className="cool-checkbox"
						labelid="bacon"
						value="checkedA"
						inputProps={{ 'aria-label': 'Checkbox A' }}
						onChange={onCheckboxChange}
						id='bacon'
					/>

					<InputLabel label="chicken">Chicken</InputLabel>
					<Checkbox
						name="chicken"
						className="cool-checkbox"
						labelid="chicken"
						value="chicken"
						inputProps={{ 'aria-label': 'Checkbox A' }}
						onChange={onCheckboxChange}
						id='chicken'
					/>

					<InputLabel label="salami">Salami</InputLabel>
					<Checkbox
						name="salami"
						className="cool-checkbox"
						labelid="salami"
						value="checkedA"
						inputProps={{ 'aria-label': 'Checkbox A' }}
						onChange={onCheckboxChange}
						id='salami'
					/>
				</div>

				<TextField data-test='select' id="select" label="Size" name="size" value="" onChange={handleChange} select>
					<MenuItem value="large" id='large'>large</MenuItem>
					<MenuItem value="Medium">Medium</MenuItem>
					<MenuItem value="Small">Small</MenuItem>
				</TextField>
				{/* <TextField
					type="text"
					name="special"
					id="special"
					label="special Instructions"
					onChange={handleChange}
				/> */}
				<TextField className="name" type="text" name="special" id="lol" label="special order" onChange={handleChange} />

				{errors.name.length > 0 ? <p>{errors.name}</p> : null}
				{errors.email.length > 0 ? <p>{errors.email}</p> : null}
				{errors.password.length > 0 ? <p>{errors.password}</p> : null}

				<Button type="submit" variant="contained" color="secondary" id='submit'>
					Order
				</Button>
			</form>
			<Link className="bottom-link" to="/orders">
				<Button>View Orders</Button>
			</Link>
		</div>
	);
};

export default Form;
