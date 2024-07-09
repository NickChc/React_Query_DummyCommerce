import { TPost } from "@src/@types/general";
import { Card, CardDescription, CardTitle } from "@src/shadcn/ui/card";
import { useNavigate } from "react-router-dom";

interface PostCardProps {
  post: TPost;
}

export function PostCard({ post }: PostCardProps) {
  const Navigate = useNavigate();

  return (
    <Card
      onClick={() => Navigate(`/posts/${post.id}`)}
      key={post.id}
      className="p-3 gap-y-3 flex flex-col hover:bg-blue-50 cursor-pointer duration-150"
    >
      <CardTitle>{post.title}</CardTitle>
      <CardDescription>{post.body}</CardDescription>
    </Card>
  );
}
