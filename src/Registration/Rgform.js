import React from "react";
import { signUpSchema } from "./schemas";
import { useFormik } from "formik";

const Rgform = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(
        "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
        values
      );
    },
  });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="input-label">
          Name
        </label>
        <input
          type="name"
          autoComplete="off"
          name="name"
          id="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && touched.name ? (
          <p className="form-error">{errors.name}</p>
        ) : null}

        <label htmlFor="email" className="input-label">
          Email
        </label>
        <input
          type="email"
          autoComplete="off"
          name="email"
          id="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && touched.email ? (
          <p className="form-error">{errors.email}</p>
        ) : null}
        <label htmlFor="password" className="input-label">
          Password
        </label>
        <input
          type="password"
          autoComplete="off"
          name="password"
          id="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && touched.password ? (
          <p className="form-error">{errors.password}</p>
        ) : null}

        <label htmlFor="confirm_password" className="input-label">
          Confirm Password
        </label>
        <input
          type="password"
          autoComplete="off"
          name="confirm_password"
          id="confirm_password"
          placeholder="Confirm Password"
          value={values.confirm_password}
          onChange={handleChange}
        />
        {errors.confirm_password && touched.confirm_password ? (
          <p className="form-error">{errors.confirm_password}</p>
        ) : null}
        <button className="input-button" type="submit">
          Registration
        </button>
      </form>
    </>
  );
};

export default Rgform;
