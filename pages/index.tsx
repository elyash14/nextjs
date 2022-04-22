import Post from "components/organisms/Post";
import Profile from "components/organisms/Profile";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import moment from "moment";
import { IPost } from "types/post";

interface IHomeProps {
  posts: IPost[];
}

const Home: NextPage<IHomeProps> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="home page - all posts" />
      </Head>

      <aside>
        <Profile />
      </aside>

      <main>
        {posts.map((post) => (
          <Post key={`home-post-${post.id}`} post={post} />
        ))}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    // make request to get all posts
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    // take 25 first post and add date to each post based on id
    const posts = result.data.slice(0, 25).map((post: IPost) => {
      const date = moment()
        .subtract(100 - post.id, "days")
        .format("MMMM Do ,YYYY");
      return { ...post, date };
    });

    // sort posts by most recent post (id instead of date)
    posts.sort((a: IPost, b: IPost) => b.id - a.id);

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

export default Home;
