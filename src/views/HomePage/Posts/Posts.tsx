import { Loading } from "@src/components/Loading";
import { PostCard } from "@src/components/PostCard";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function Posts() {
  const { postsQuery } = useGlobalProvider();

  if (postsQuery?.isLoading) {
    return <Loading />;
  }

  if (postsQuery?.error) {
    return (
      <div className="text-destructive">{JSON.stringify(postsQuery.error)}</div>
    );
  }

  return (
    <div className="flex flex-col items-stretch gap-y-4 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto mt-9 ">
      {postsQuery?.data?.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </div>
  );
}
