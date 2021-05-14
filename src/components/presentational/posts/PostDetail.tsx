import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import PostForm from "./PostForm";
import { AddPostModalProps } from "./NewPost";

interface OrderDetailViewProps extends AddPostModalProps {}

const OrderDetailView: React.FC<OrderDetailViewProps> = ({
  errors,
  touched,
  values,
  onChange,
  onSubmit,
  submitting,
}) => {
  return (
    <Flex minHeight="100vh" backgroundColor="#1C3738" flexDirection="column">
      <Flex justifyContent="center" alignItems="center" my="auto">
        <Flex
          background="white"
          px="2rem"
          borderRadius=".4rem"
          flexDirection="column"
          alignItems="center"
          pt="1rem"
        >
          <Text fontSize="2rem" fontWeight="700">
            Update Post
          </Text>
          <PostForm
            {...{ errors, touched, values, onChange, onSubmit, submitting }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OrderDetailView;
