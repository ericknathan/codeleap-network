import { httpClient } from "../../client";

export async function getPostsListRequest() {
  return httpClient.get("/").then((response) => response.data);
}
