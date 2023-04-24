import { httpClient } from "../../client";

interface DeletePostPayload {
  id: number;
}

export function deletePostRequest({ id }: DeletePostPayload) {
  return httpClient.delete(`/${id}/`);
}
