import { fetchSinglePost } from "@src/api/posts";
import { fetchUser } from "@src/api/users";
import { Loading } from "@src/components/Loading";
import { Card, CardDescription, CardTitle } from "@src/shadcn/ui/card";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function PostPage() {
  const params = useParams();

  const postQuery = useQuery({
    queryFn: () => fetchSinglePost(params.id),
    queryKey: ["posts", params.id],
  });

  const { data: post, isLoading: loadingPost, error: postError } = postQuery;

  const userQuery = useQuery({
    queryFn: () => fetchUser(postQuery.data?.userId),
    enabled: postQuery.isSuccess,
    queryKey: ["users", { userId: postQuery.data?.userId }],
  });

  console.log(userQuery.data);

  if (post == null) return null;

  if (loadingPost) return <Loading />;

  if (postError) {
    return <div className="text-destructive">{JSON.stringify(postError)}</div>;
  }

  return (
    <div className="w-full sm:w-[80%] lg:w-[60%] mx-auto pt-14">
      <Card className="p-3 h-dvh">
        <CardTitle className="mb-4">{post.title}</CardTitle>
        <CardDescription>{post.body}</CardDescription>
      </Card>
    </div>
  );
}
