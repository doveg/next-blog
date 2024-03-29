import { MDXRemote } from 'next-mdx-remote';
import { getBlogBySlug, getBlogSlugList } from '../../lib/common';
import CoverContent from '../../component/CoverContent';
import Head4Content from '../../component/Head4Content';
// Syntax highlight
import 'prism-themes/themes/prism-vsc-dark-plus.css';
import ContentAddition from '../../component/ContentAddition';
import RadiusLayoutItem from '../../component/RadiusLayoutItem';
import ContentProgressBar from '../../component/ContentProgressBar';

export async function getStaticPaths() {
  const blogs = getBlogSlugList();

  return {
    paths: blogs.map((blog) => ({
      params: { slug: blog },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return { props: { blog } };
}

export default function BlogItem({ blog }) {
  return (
    <div className="max-w-5xl mx-auto ">
      <ContentProgressBar />

      <div className="">
        {blog.coverPath && <CoverContent path={blog.coverPath} alt={blog.title} />}
      </div>

      <Head4Content item={blog} />

      <ContentAddition item={blog} />

      <RadiusLayoutItem>
        <div className="py-8 max-w-4xl mx-auto prose dark:prose-invert ">
          <MDXRemote
            {...blog.content}
            components={{
              // eslint-disable-next-line @next/next/no-img-element
              img: (props) => <img {...props} alt="" className="mx-auto rounded-md max-w-3xl " />,
            }}
          />
        </div>
      </RadiusLayoutItem>

      {/*<ContentTable item={blog} />*/}
    </div>
  );
}
