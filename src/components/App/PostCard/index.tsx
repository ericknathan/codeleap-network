import { PostModel } from "@/@types/models";
import { getRelativeDate } from "@/utils/date";

import { IconButton } from "@/components/Form";
import { DeleteItemModal, EditItemModal } from "@/components/Overlay/Modal";
import { Heading } from "@/components/Text";

import { CardContainer, CardContent, CardHeader } from "./styles";

interface PostCardProps {
  post: PostModel;
}

export function PostCard({ post }: PostCardProps) {
  const { id, title, content, username, created_datetime } = post;

  return (
    <CardContainer>
      <CardHeader>
        <Heading>{title}</Heading>
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
