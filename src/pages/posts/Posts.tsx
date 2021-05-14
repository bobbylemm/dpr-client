import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import * as Yup from "yup";
import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import PostsView from "../../components/presentational/posts/Posts";
import MainLayout from "../../components/layouts/Main";
import { PostType } from "../../types";
import {
  addPostAction,
  getUserPostsAction,
  postSelector,
} from "../../redux/postSlice";

interface PostsProps {}

interface PostsState {
  orders: PostType[];
  lastDoc: any;
  firstDoc: any;
  openAddModal: boolean;
}

const Orders: React.FC<PostsProps> = () => {
  const history = useHistory();
  const toast = useToast();
  const dispatch = useDispatch();

  const { posts } = useSelector(postSelector);

  const [state, setState] = useState<PostsState>({
    orders: [],
    lastDoc: null,
    firstDoc: null,
    openAddModal: false,
  });

  const NewPostSchema = Yup.object().shape({
    title: Yup.string().required("Title required").min(3),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: NewPostSchema,
    onSubmit: async ({ title }, { resetForm }) => {
      const payload = {
        title,
      };
      try {
        dispatch(addPostAction(payload));
        toast({
          title: "New post added successfully.",
          description: "you have successfully added a new post",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setState((s) => ({ ...s, openAddModal: false }));
      } catch (error) {
        toast({
          title: "Action Failed",
          description: "could not add post, please try later",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    },
  });

  useEffect(() => {
    (async () => {
      await dispatch(getUserPostsAction());
    })();
  }, []);

  const fetchPosts = async () => {};

  const handleFetch = async () => {};

  const handleEdit = (item: any) => {
    history.push(`/posts/${item.id}`);
  };

  return (
    <MainLayout>
      <PostsView
        headers={["title", "created at", "action"]}
        data={posts}
        handleFetch={handleFetch}
        addNewPostProps={{
          errors: formik.errors,
          onChange: formik.handleChange,
          onSubmit: formik.handleSubmit,
          submitting: formik.isSubmitting,
          touched: formik.touched,
          values: formik.values,
        }}
        handleOpenModal={() => setState((s) => ({ ...s, openAddModal: true }))}
        handleCloseModal={() =>
          setState((s) => ({ ...s, openAddModal: false }))
        }
        modalIsOpen={state.openAddModal}
        handleEdit={handleEdit}
      />
    </MainLayout>
  );
};

export default Orders;
