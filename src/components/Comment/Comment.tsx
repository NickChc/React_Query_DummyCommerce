import { TComment } from "@src/@types/general";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@src/shadcn/ui/card";

interface CommentProps {
  comment: TComment;
}

export function Comment({ comment }: CommentProps) {
  return (
    <Card>
      <CardContent>
        <CardTitle className="text-xl my-1">{comment.user.username}</CardTitle>
        <CardDescription className="text-base">{comment.body}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end">
        <span className="cursor-pointer underline ">Like</span>
      </CardFooter>
    </Card>
  );
}
