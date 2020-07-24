import React, { useState, useEffect } from 'react';
import './form.styles.css';
import { Link, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { TextField, Select, MenuItem, InputLabel, Checkbox, Menu } from '@material-ui/core';
import RootRef from '@material-ui/core/RootRef';
import * as Yup from 'yup'


const Form = ({ friends, setFriends, postUser, history }) => {
    const domRef = React.useRef();
    const formSchema = Yup.object().shape({
        name: Yup.string().min(2, 'Must be at least 2 characters'),
        email: Yup.string().email('Must be a valid email address.').required('Must include email address.'),
        password: Yup.string().min(6, 'Passwords must be at least 6 characters long.').required('Password is Required')
    });

    let schema = Yup.string();

    schema.isValid('hello word').then((valid) => console.log(valid));

    let [formValues, setFormValues] = useState({
        name: '',
        last_name: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        name:'',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        e.persist();
        console.log('Hello')
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
        formSchema.isValid(formValues).then((valid) => {
            if (valid) {
                postUser(formValues);
                history.push('/team');
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
                <TextField
                    className="name"
                    type="text"
                    name="name"
                    id="name"
                    label="name"
                    onChange={handleChange}
                />
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
                
                <div className="checkboxes" labelId='checkboxes'>
                    <InputLabel label="pepperoni">Pepperoni</InputLabel>
                    <Checkbox
                        className="cool-checkbox"
                        labelid="pepperoni"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                    />

                    <InputLabel label='bacon'>Bacon</InputLabel>
                    <Checkbox
                        className="cool-checkbox"
                        labelid="bacon"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                    
                    />

                    <InputLabel label='chicken'>Chicken</InputLabel>
                    <Checkbox
                        className="cool-checkbox"
                        labelid="chicken"
                        value="chicken"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                    />

                    <InputLabel label='salami'>Salami</InputLabel>
                    <Checkbox
                        className="cool-checkbox"
                        labelid="salami"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                    />
                </div>

                <TextField id="select" label="Size" value="20" select>
                    <MenuItem value="large">large</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="Small">Small</MenuItem>
                </TextField>
                <TextField
                    className="name"
                    type="text"
                    name="special"
                    id="name"
                    label="special Instructions"
                    onChange={handleChange}
                />
                {errors.name.length > 0 ? <p>{errors.name}</p> : null}
                {errors.email.length > 0 ? <p>{errors.email}</p> : null}
                {errors.password.length > 0 ? <p>{errors.password}</p> : null}

                <Button type="submit" variant="contained" color="secondary">
                    Create Pizza!
				</Button>
            </form>
            <Link className="bottom-link" to="/orders">
                <Button>View Orders</Button>
            </Link>
        </div>
    );
};

export default Form;