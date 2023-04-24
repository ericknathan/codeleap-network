import { useInfiniteQuery } from "@tanstack/react-query";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { PostModel } from "@/@types/models";
import { getPostsListRequest } from "@/services/http/requests/post";

import { SlideDownAnimation } from "@/components/Animations";
import { CreatePostForm, Header, PostCard } from "@/components/App";

import {
  ContentContainer,
  IntersectionObservable,
  PageContainer,
} from "./styles";

export function Home() {
  const { ref, inView } = useInView();

  const { data, fetchNextPage } = useInfiniteQuery(
    ["posts"],
    ({ pageParam }) => {
      const offset = pageParam?.split("offset=")[1];
      return getPostsListRequest({ offset });
    },
    {
      getPreviousPageParam: (firstPage) => firstPage.previous ?? undefined,
      getNextPageParam: (lastPage) => lastPage.next ?? undefined,
    }
  );

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <PageContainer>
      <ContentContainer>
        <Header />
        <CreatePostForm />
        {data?.pages.map((page, index) => (
          <Fragment key={index}>
            {page?.results?.map((post: PostModel, index: number) => (
              <SlideDownAnimation key={post.id} delay={0.2 * index}>
                <PostCard post={post} />
              </SlideDownAnimation>
            ))}
          </Fragment>
        ))}
        <IntersectionObservable ref={ref} />
      </ContentContainer>
    </PageContainer>
  );
}
