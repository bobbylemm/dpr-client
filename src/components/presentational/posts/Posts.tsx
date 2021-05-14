import React from "react";
import { Flex, Box, Button } from "@chakra-ui/react";
import CustomTable from "./PostsTable";
import AddPostModal, { AddPostModalProps } from "./NewPost";

interface PostsViewProps {
  headers: string[];
  data: any[];
  handleFetch: (direction: "next" | "prev") => void;
  addNewPostProps: Partial<AddPostModalProps>;
  modalIsOpen: boolean;
  handleCloseModal: () => void;
  handleOpenModal: () => void;
  handleEdit: (item: any) => void;
}

const PostsView: React.FC<PostsViewProps> = ({
  headers,
  data,
  handleFetch,
  handleOpenModal,
  handleCloseModal,
  addNewPostProps,
  modalIsOpen,
  handleEdit,
}) => {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        backgroundColor="#000F08"
        flexDirection="column"
      >
        <Flex mb="1rem" justifyContent="flex-end" width="50%">
          <Button size="md" color="#1C3738" onClick={handleOpenModal}>
            New Post
          </Button>
        </Flex>
        <Box
          width="50%"
          backgroundColor="#F4FFF8"
          p="1rem"
          borderRadius=".4rem"
          overflowX="auto"
        >
          <CustomTable {...{ headers, data, handleFetch, handleEdit }} />
        </Box>
      </Flex>
      <AddPostModal
        {...addNewPostProps}
        onClose={handleCloseModal}
        isOpen={modalIsOpen}
      />
    </>
  );
};

export default PostsView;
