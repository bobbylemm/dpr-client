import React from "react";
import { CustomModal } from "../../reusable";
import PostForm from "./PostForm";

interface PostFields {
  title?: any;
}

export interface AddPostModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  touched: PostFields;
  onChange: (e: React.ChangeEvent<any>) => void;
  values: PostFields;
  errors: PostFields;
  onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  submitting: boolean;
}

const AddPostModal: React.FC<AddPostModalProps> = ({
  isOpen,
  onClose,
  errors,
  touched,
  values,
  onChange,
  onSubmit,
  submitting,
}) => {
  return (
    <CustomModal
      title="New Post"
      isOpen={isOpen as boolean}
      onClose={onClose as () => void}
    >
      <PostForm
        {...{ errors, touched, values, onChange, onSubmit, submitting }}
      />
    </CustomModal>
  );
};

export default AddPostModal;
