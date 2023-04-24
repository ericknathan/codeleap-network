import { httpClient } from "../../client";

interface EditPostPayload {
  id: number;
  title: string;
  content: string;
}

export function editPostRequest({ id, title, content }: EditPostPayload) {
  return httpClient.patch(`/${id}/`, {
    title,
    content,
  });
}
