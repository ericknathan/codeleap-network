import { useQuery } from "@tanstack/react-query";

import { CreatePostForm, Header, PostCard } from "@/components/App";

import { PostModel } from "@/@types/models";
import { getPostsListRequest } from "@/services/http/requests/post";
import { ContentContainer, LoadingContainer, PageContainer } from "./styles";
import { SlideDownAnimation } from "@/components/Animations";

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
        {data?.results?.map((post: PostModel, index: number) => (
          <SlideDownAnimation key={post.id} delay={0.2 * index}>
            <PostCard post={post} />
          </SlideDownAnimation>
        ))}
      </ContentContainer>
    </PageContainer>
  );
}
