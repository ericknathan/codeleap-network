import { useQuery } from "@tanstack/react-query";

import { CreatePostForm, Header, PostCard } from "@/components/App";

import { PostModel } from "@/@types/models";
import { getPostsListRequest } from "@/services/http/requests/post";
import { ContentContainer, LoadingContainer, PageContainer } from "./styles";

export function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPostsListRequest,
  });

  return (
    <PageContainer>
      <ContentContainer>
        <Header />
        <CreatePostForm />
        {isLoading && (
          <LoadingContainer>
            <p>Loading posts...</p>
          </LoadingContainer>
        )}
        {data?.results?.map((post: PostModel) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ContentContainer>
    </PageContainer>
  );
}
