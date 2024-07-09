import { TComment, TReaction } from "@src/@types/general";
import { DislikeIcon, LikeIcon } from "@src/assets/icons";
import { LIKED_COMMENTS, LIKED_POSTS } from "@src/config/general";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@src/shadcn/ui/card";
import { useEffect, useState } from "react";

interface CommentProps {
  comment: TComment;
}

enum TReaction_Enum {
  NONE = "none",
  LIKED = "liked",
  DISLIKED = "disliked",
}

export function Comment({ comment }: CommentProps) {
  const [reaction, setReaction] = useState<TReaction_Enum>(TReaction_Enum.NONE);

  const isLiked = reaction === TReaction_Enum.LIKED;
  const isDisliked = reaction === TReaction_Enum.DISLIKED;

  function saveReaction(
    reaction: "like" | "dislike",
    commentId: string | number
  ) {
    const savedLikesJson = localStorage.getItem(LIKED_COMMENTS);
    if (reaction === "like") {
      if (savedLikesJson == null) {
        const savedLikes: TReaction[] = [{ commentId, reaction: "like" }];
        localStorage.setItem(LIKED_COMMENTS, JSON.stringify(savedLikes));
        return;
      }

      const savedLikes: TReaction[] = JSON.parse(savedLikesJson);
      let newSavedLikes: TReaction[] = [];

      if (savedLikes.some((like) => like.commentId === commentId)) {
        newSavedLikes = savedLikes.filter(
          (like) => like.commentId !== commentId
        );
      } else {
        newSavedLikes = [...savedLikes, { commentId, reaction: "like" }];
      }
      localStorage.setItem(LIKED_COMMENTS, JSON.stringify(newSavedLikes));
    } else {
      if (savedLikesJson == null) {
        const likes: TReaction[] = [{ commentId, reaction: "dislike" }];
        localStorage.setItem(LIKED_COMMENTS, JSON.stringify(likes));
        return;
      }

      const savedLikes: TReaction[] = JSON.parse(savedLikesJson);

      let newSavedLikes: TReaction[] = [];

      if (savedLikes.some((like) => like.commentId === commentId)) {
        newSavedLikes = savedLikes.filter(
          (like) => like.commentId !== commentId
        );
      } else {
        newSavedLikes = [...savedLikes, { commentId, reaction: "dislike" }];
      }

      localStorage.setItem(LIKED_COMMENTS, JSON.stringify(newSavedLikes));
    }
  }

  function toggleLike(react: "like" | "dislike") {
    if (react === "like") {
      if (reaction === TReaction_Enum.LIKED) {
        setReaction(TReaction_Enum.NONE);
      } else {
        setReaction(TReaction_Enum.LIKED);
      }
      saveReaction("like", comment.id);
    } else {
      if (reaction === TReaction_Enum.DISLIKED) {
        setReaction(TReaction_Enum.NONE);
      } else {
        setReaction(TReaction_Enum.DISLIKED);
      }
      saveReaction("dislike", comment.id);
    }
  }

  useEffect(() => {
    const savedLikesJson = localStorage.getItem(LIKED_COMMENTS);

    if (savedLikesJson == null) return;

    const savedLikes: TReaction[] = JSON.parse(savedLikesJson);

    const commentReaction = savedLikes.find(
      (like) => like.commentId === comment.id
    );

    if (commentReaction == null) return;

    if (commentReaction.reaction === "like") {
      setReaction(TReaction_Enum.LIKED);
    } else {
      setReaction(TReaction_Enum.DISLIKED);
    }
  }, []);

  return (
    <Card>
      <CardContent>
        <CardTitle className="text-xl my-1">{comment.user.username}</CardTitle>
        <CardDescription className="text-base">{comment.body}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end gap-x-3 items-center text-xl pb-3 select-none">
        <span>
          {isLiked
            ? comment.likes + 1
            : isDisliked
            ? comment.likes - 1
            : comment.likes}
        </span>
        <span
          className={`cursor-pointer underline ${
            isLiked ? "text-blue-500" : ""
          }`}
          onClick={() => toggleLike("like")}
        >
          <LikeIcon />
        </span>
        <span
          className={`cursor-pointer underline ${
            isDisliked ? "text-blue-500" : ""
          }`}
          onClick={() => toggleLike("dislike")}
        >
          <DislikeIcon />
        </span>
      </CardFooter>
    </Card>
  );
}
