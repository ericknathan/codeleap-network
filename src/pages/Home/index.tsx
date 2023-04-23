import { CreatePostForm, Header, PostCard } from "@/components/App";

import { PostModel } from "@/@types/models";
import { ContentContainer, PageContainer } from "./styles";

const posts = [
  {
    id: 8709,
    username: "Keenan.Howe15",
    created_datetime: "2023-04-23T16:41:25.649917Z",
    title: "Et veritatis doloremque odio dicta sit quis quo sunt omnis.",
    content: `
      Quia veniam odio non dolor placeat laudantium eius vero. Est unde quidem cupiditate rerum soluta exercitationem praesentium nobis quia. Rem ipsam quia omnis quis quo ea est hic pariatur.
      Id voluptas non. Enim veniam libero cum vel facere consequatur dolorum ut sunt. Veritatis alias consequatur perferendis fugit quibusdam aut quae alias aperiam. Nam iste quibusdam eveniet occaecati ipsum. Quae at tempora animi enim neque architecto perspiciatis.
      Ea magnam qui non ex consequatur possimus ratione molestiae deserunt. Repellat nostrum sint autem ut amet nam. Laborum est doloremque maxime eum veritatis et temporibus.
    `,
  },
  {
    id: 8708,
    username: "Andy_Smith45",
    created_datetime: "2023-04-23T16:27:01.810004Z",
    title: "Perferendis rerum ad dicta dolorem explicabo fuga.",
    content: `
      Aut illum occaecati aperiam aut vel ullam in distinctio. Voluptatum sint eveniet. Est voluptatem eum sequi suscipit accusantium velit totam aut quo. Ut dolor aut voluptatibus laborum officia consequatur hic ea. Consequatur qui veniam et maiores quo nemo tempore inventore. Mollitia iusto doloribus labore totam.
      Neque accusamus voluptate molestias et sed omnis. Voluptatibus itaque est labore omnis enim. Aliquam voluptate exercitationem sed quisquam. Qui voluptates voluptas iure ab assumenda necessitatibus.
      Itaque harum aut. Doloremque omnis voluptates cupiditate et dolore omnis ea dolor nisi. Vero et ut sunt. Accusamus accusantium similique pariatur qui possimus.
    `,
  },
  {
    id: 8707,
    username: "Karianne_Moore16",
    created_datetime: "2023-04-23T16:05:17.932396Z",
    title: "Aperiam ad maxime blanditiis nisi rerum eum.",
    content: `
      Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.\n\nDuis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
    `,
  },
  {
    id: 8705,
    username: "Eda.Barrows37",
    created_datetime: "2023-04-23T15:39:43.262914Z",
    title: "Commodi quas quis quasi.",
    content: `
      Quidem dicta alias fugit vitae. Similique mollitia porro. Consequuntur iusto rerum laborum.
      Illo consequatur pariatur ipsum maiores fuga rerum est. Architecto voluptatum dolorem. Dignissimos omnis consequuntur aut occaecati nobis natus. Id corrupti autem eveniet ut a suscipit laudantium nobis consectetur. Tempore vitae quo officiis. Ex asperiores nulla.
      Maxime est sint a pariatur accusamus corrupti. Ipsum officia ipsa maiores est laborum qui quia maiores eum. Quasi autem reprehenderit hic aliquam. Dignissimos libero et. Nemo quae debitis qui quia illum. Dolores deserunt rerum ab et rerum temporibus.
    `,
  },
];

export function Home() {
  return (
    <PageContainer>
      <ContentContainer>
        <Header />
        <CreatePostForm />
        {posts.map((post: PostModel) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ContentContainer>
    </PageContainer>
  );
}
