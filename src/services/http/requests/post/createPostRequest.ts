import { httpClient } from "../../client";

interface CreatePostPayload {
  username: string;
  title: string;
  content: string;
}

export function createPostRequest({
  username,
  title,
  content,
}: CreatePostPayload) {
  return httpClient.post("/", {
    username,
    title,
    content,
  });
}
