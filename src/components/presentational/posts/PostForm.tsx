import React from "react";
import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import { AddPostModalProps } from "./NewPost";

export interface OrderFormProps extends AddPostModalProps {}

const OrderForm: React.FC<OrderFormProps> = ({
  errors,
  touched,
  values,
  onChange,
  onSubmit,
  submitting,
}) => {
  return (
    <Flex py="10" flexDirection="column" alignItems="center">
      <FormControl id="title" isInvalid={!!errors.title && !!touched.title}>
        <FormLabel htmlFor="waiter">Title</FormLabel>
        <Input
          placeholder="order title"
          onChange={onChange}
          value={values.title as string}
        />
        <FormErrorMessage>{errors.title}</FormErrorMessage>
      </FormControl>

      <Button
        mt="4rem"
        size="lg"
        width="80%"
        backgroundColor="yellow.200"
        onClick={(e: any) => onSubmit(e)}
        isLoading={submitting}
      >
        Submit
      </Button>
    </Flex>
  );
};

export default OrderForm;
