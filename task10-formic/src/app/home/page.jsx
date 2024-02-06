"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import "./forms.css";
function homepage() {
    const [able, setAble] = useState(true);

    const validate = values => {
        const errors = {};

        if (!values.name) {
            errors.name = 'Required';
        }
        else if (values.name.length > 15) {
            errors.name = 'must be 15 characters or less';
        }

        if (!values.email) {
            errors.email = 'Required';
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Invalid Email Address";
        }

        if (!values.password) {
            errors.password = 'Required';
        }
        else if (!values.password.length > 6) {
            errors.password = "Must be more than 6 characters"
        }

        if (!values.confirm_password) {
            errors.confirm_password = 'Required'
        }
        else if (values.password !== values.confirm_password) {
            errors.confirm_password = "Password is not matching..."
        }

        return errors;
    }
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirm_password: "",
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (
        <div className="homepage">
            <form className="forms" onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {formik.errors.name ? <div className="errors">{formik.errors.name}</div> : null}

                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email ? <div className="errors">{formik.errors.email}</div> : null}

                <label htmlFor="name">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password ? <div className="errors">{formik.errors.password}</div> : null}
                <label htmlFor="name">Confirm Password</label>
                <input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    onChange={formik.handleChange}
                    value={formik.values.confirm_password}
                />
                {formik.errors.confirm_password ? <div className="errors">{formik.errors.confirm_password}</div> : null}
                <button type="submit" disabled={formik.values.name === "" || formik.values.email === "" || formik.values.password === "" || formik.values.confirm_password === ""}>Submit</button>
            </form>
        </div>
    );
}

export default homepage;
