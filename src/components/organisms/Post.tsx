import CardTitle from "components/molecules/CardTitle";
import { IPost } from "types/post";
import Card from "../molecules/Card";
import P from "components/atoms/P";
import Link from "next/link";

interface IPostProps {
  post: IPost;
}
const Post: React.FC<IPostProps> = ({ post }) => {
  return (
    <Card>
      <header>
        <Link href={`/post/${post.id}`}>
          <a>
            <CardTitle>{post.title}</CardTitle>
          </a>
        </Link>
        <small>{post.date}</small>
      </header>
      <P>{post.body}</P>
    </Card>
  );
};

export default Post;
