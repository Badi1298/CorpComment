import React, { useState } from "react";

import { TFeedbackItem } from "../../lib/types";

import { TriangleUpIcon } from "@radix-ui/react-icons";

type FeedbackItemProp = {
    feedbackItem: TFeedbackItem;
};

export default function FeedbackItem({ feedbackItem }: FeedbackItemProp) {
    const [open, setOpen] = useState(false);
    const [upvoteCount, setUpvoteCount] = useState(feedbackItem.upvoteCount);

    const handleUpvote = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.stopPropagation();
        setUpvoteCount((prev) => (prev += 1));
        e.currentTarget.disabled = true;
    };

    return (
        <li
            onClick={() => setOpen((prev) => !prev)}
            className={`feedback ${open && "feedback--expand"}`}
        >
            <button onClick={handleUpvote}>
                <TriangleUpIcon />
                <span>{upvoteCount}</span>
            </button>

            <div>
                <p>{feedbackItem.badgeLetter}</p>
            </div>

            <div>
                <p>{feedbackItem.company}</p>
                <p>{feedbackItem.text}</p>
            </div>

            <p>{feedbackItem.daysAgo}</p>
        </li>
    );
}
