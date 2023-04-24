import { useSelector } from "react-redux";

import { PostModel } from "@/@types/models";
import { RootState } from "@/redux/store";
import { getRelativeDate } from "@/utils/date";

import { IconButton } from "@/components/Form";
import { DeleteItemModal, EditItemModal } from "@/components/Overlay/Modal";
import { Heading } from "@/components/Text";

import { CardContainer, CardContent, CardHeader } from "./styles";

interface PostCardProps {
  post: PostModel;
}

export function PostCard({ post }: PostCardProps) {
  const auth = useSelector((state: RootState) => state.auth);
  const { id, title, content, username, created_datetime } = post;

  const isUserPostOwner = auth.username === username;

  return (
    <CardContainer>
      <CardHeader>
        <Heading as="h3">{title}</Heading>
        {isUserPostOwner && (
          <div>
            <DeleteItemModal id={id}>
              <IconButton title="Delete post">
                <img src="/icons/delete-trash.svg" alt="" />
              </IconButton>
            </DeleteItemModal>
            <EditItemModal post={post}>
              <IconButton title="Edit post">
                <img src="/icons/edit-pencil.svg" alt="" />
              </IconButton>
            </EditItemModal>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div>
          <span>@{username}</span>
          <time>{getRelativeDate(created_datetime)}</time>
        </div>
        <p>{content}</p>
      </CardContent>
    </CardContainer>
  );
}
