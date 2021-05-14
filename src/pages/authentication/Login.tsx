import React from "react";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import { LoginView } from "../../components/presentational";
import { loginAction, authSelector } from "../../redux/authSlice";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const history = useHistory();
  const toast = useToast();
  const dispatch = useDispatch();

  const { status } = useSelector(authSelector);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required("Email required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      try {
        dispatch(loginAction(values));
        history.push("/posts");
        toast({
          title: "Login successfull.",
          description: "you were successfully authenticated",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } catch (error) {
        console.log(error, "error");
        toast({
          title: "Action Failed",
          description: "error logging in",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    },
  });

  return (
    <LoginView
      onChange={formik.handleChange}
      values={{ email: formik.values.email, password: formik.values.password }}
      onSubmit={formik.handleSubmit}
      errors={{ email: formik.errors.email, password: formik.errors.password }}
      submitting={formik.isSubmitting}
      touched={{
        email: formik.touched.email,
        password: formik.touched.password,
      }}
    />
  );
};

export default Login;
