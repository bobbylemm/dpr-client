import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { PostType } from "../../types";
import MainLayout from "../../components/layouts/Main";
import PostDetailView from "../../components/presentational/posts/PostDetail";
import { updatePostAction, postSelector } from "../../redux/postSlice";

interface OrderDetailProps extends RouteComponentProps<{ postId: string }> {}

const OrderDetail: React.FC<OrderDetailProps> = ({ match }) => {
  const [postToEdit, setPostToEdit] = useState<PostType | undefined>();
  const toast = useToast();
  const dispatch = useDispatch();

  const UpdatePostSchema = Yup.object().shape({
    title: Yup.string().required("Title required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: postToEdit?.title || "",
    },
    validationSchema: UpdatePostSchema,
    onSubmit: async ({ title }, { resetForm }) => {
      try {
        resetForm();
        dispatch(updatePostAction({ title, id: Number(match.params.postId) }));
        toast({
          title: "Post Updated Successfully.",
          description: "you have updated this post successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: "Action Failed",
          description: "could not update post, please try later",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    },
  });

  return (
    <MainLayout>
      <PostDetailView
        {...{
          errors: formik.errors,
          onChange: formik.handleChange,
          onSubmit: formik.handleSubmit,
          submitting: formik.isSubmitting,
          touched: formik.touched,
          values: formik.values,
        }}
      />
    </MainLayout>
  );
};

export default OrderDetail;
