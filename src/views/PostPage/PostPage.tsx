import { fetchComments } from "@src/api/comments";
import { fetchSinglePost } from "@src/api/posts";
import { fetchUser } from "@src/api/users";
import { Comment } from "@src/components/Comment";
import { Loading } from "@src/components/Loading";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@src/shadcn/ui/card";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function PostPage() {
  const params = useParams();

  const {
    data: post,
    isLoading: loadingPost,
    error: postError,
  } = useQuery({
    queryFn: () => fetchSinglePost(params.id),
    queryKey: ["posts", params.id],
  });

  const {
    data: user,
    isLoading: loadingUser,
    error: userError,
  } = useQuery({
    queryFn: () => fetchUser(post?.userId),
    enabled: post?.userId != null,
    queryKey: ["users", { userId: post?.userId }],
  });

  const { data: comments } = useQuery({
    queryFn: () => fetchComments(post?.id),
    enabled: post?.id != null,
    queryKey: ["comments", { postId: post?.id }],
  });

  if (loadingPost) return <Loading />;

  if (postError || userError) {
    return (
      <div className="text-destructive">
        {JSON.stringify(postError || userError)}
      </div>
    );
  }

  if (post == null || user == null) return null;

  return (
    <div className="w-full sm:w-[80%] lg:w-[60%] mx-auto pt-14">
      <Card className="min-h-80 flex flex-col justify-between">
        <CardContent>
          <div className="mb-3 flex items-end gap-x-4">
            {loadingUser ? (
              <div className="w-20 aspect-square animate-pulse rounded-md bg-gray-300"></div>
            ) : (
              <img
                src={user.image}
                alt={user.username}
                className="aspect-square object-cover w-20"
              />
            )}
            <CardTitle className="mb-4">{post.title}</CardTitle>
          </div>
          <CardDescription>{post.body}</CardDescription>
        </CardContent>
        <CardContent className=" flex flex-col gap-y-3">
          {comments?.map((comment) => {
            return <Comment key={comment.id} comment={comment} />;
          })}
        </CardContent>
      </Card>
    </div>
  );
}
