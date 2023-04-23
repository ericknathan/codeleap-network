import { PostModel } from "@/@types/models";

import { IconButton } from "@/components/Form";
import { Heading } from "@/components/Text";

import { CardContainer, CardContent, CardHeader } from "./styles";

interface PostCardProps {
  post: PostModel;
}

export function PostCard({ post }: PostCardProps) {
  const { title, content, username, created_datetime } = post;

  return (
    <CardContainer>
      <CardHeader>
        <Heading>{title}</Heading>
        <div>
          <IconButton title="Delete post">
            <img src="/icons/delete-trash.svg" alt="" />
          </IconButton>
          <IconButton title="Edit post">
            <img src="/icons/edit-pencil.svg" alt="" />
          </IconButton>
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <span>@{username}</span>
          <time>{created_datetime}</time>
        </div>
        <p>{content}</p>
      </CardContent>
    </CardContainer>
  );
}
