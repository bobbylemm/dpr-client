import React from "react";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";

import { RegisterView } from "../../components/presentational";
// import { login } from "../../apis/authentication";

interface LoginProps {}

const Register: React.FC<LoginProps> = () => {
  const history = useHistory();
  const toast = useToast();

  const LoginSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      //   await login(values);
      //   history.push("/orders");
      //   toast({
      //     title: "Login successfull.",
      //     description: "you were successfully authenticated",
      //     status: "success",
      //     duration: 5000,
      //     isClosable: true,
      //   });
    },
  });

  return (
    <RegisterView
      onChange={formik.handleChange}
      values={{
        name: formik.values.name,
        email: formik.values.email,
        password: formik.values.password,
      }}
      onSubmit={formik.handleSubmit}
      errors={{
        name: formik.errors.name,
        email: formik.errors.email,
        password: formik.errors.password,
      }}
      submitting={formik.isSubmitting}
      touched={{
        name: formik.touched.name,
        email: formik.touched.email,
        password: formik.touched.password,
      }}
    />
  );
};

export default Register;
