import { httpClient } from "../../client";

export async function getPostsListRequest({ offset = 0, limit = 10 }) {
  return httpClient
    .get("/", {
      params: {
        offset,
        limit,
      },
    })
    .then((response) => response.data);
}
