import { getMarkdownDocuments } from '@pellegrims/shared/markdown';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { PageHero } from '@pellegrims/pellegrims-dev/ui/molecules';
import { Grid, PageTemplate } from '@pellegrims/pellegrims-dev/ui/templates';
import { Card, CardProps } from '@pellegrims/pellegrims-dev/ui/organisms';
import { buildOgImageUrl, buildRelativeBlogArticleUrl } from '../../utils/url';
import { POSTS_PATH } from '../../utils/paths';

interface BlogProps {
  posts: CardProps[];
}

const title = 'Blog';

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => (
  <PageTemplate
    seoProps={{ title }}
    header={
      <PageHero
        title={title}
        description="Articles about things that I found interesting enough to share."
      />
    }
  >
    <Grid items={posts} render={(post) => <Card {...post} />} />
  </PageTemplate>
);

export default Blog;

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const posts = getMarkdownDocuments(POSTS_PATH);
  return {
    props: {
      posts: posts.map(
        (post): CardProps => ({
          title: post.frontMatter.title ?? '',
          cover:
            post.frontMatter.coverImage ??
            buildOgImageUrl({
              date: post.frontMatter.date,
              description: post.frontMatter.description,
              title: post.frontMatter.title,
              readMinutes: post.readingTimeMins,
            }),
          created: post.frontMatter.date,
          excerpt: post.frontMatter.description ?? '',
          link: buildRelativeBlogArticleUrl(post.slug),
          linkTarget: '_self',
          tags: post.frontMatter.tags ?? [],
        })
      ),
    },
  };
};
