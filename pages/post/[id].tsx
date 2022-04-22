import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import Head from "next/head";
import axios from "axios";
import moment from "moment";
import { IPost } from "types/post";
import H1 from "components/atoms/H1";

interface IPostProps {
  post: IPost;
}
const Post: NextPage<IPostProps> = ({ post }) => {
  return (
    <div>
      <Head>
        <title>Post: {post.title}</title>
        <meta name="description" content="Post Page" />
      </Head>
      <main>
        <header>
          <H1>{post.title}</H1>
          <p>{post.date}</p>
        </header>
        <p>{post.body}</p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  try {
    // make request to get current post
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${context.params?.id}`
    );
    const post = {
      ...result.data,
      date: moment()
        .subtract(100 - result.data.id, "days")
        .format("MMMM Do ,YYYY"),
    };

    return {
      props: {
        post,
      },
      revalidate: 10, // In seconds
    };
  } catch (error) {
    console.log(error);
    return { notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = result.data;

    // Get the paths we want to pre-render based on posts
    const paths = posts.slice(0, 25).map((post: IPost) => ({
      params: { id: String(post.id) },
    }));

    // pre-render only at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: "blocking" };
  } catch (error) {
    console.log(error);
    return { paths: [], fallback: "blocking" };
  }
};

export default Post;
