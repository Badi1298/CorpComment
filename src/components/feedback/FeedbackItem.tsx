import { TFeedbackItem } from "../../lib/types";

import { TriangleUpIcon } from "@radix-ui/react-icons";

type FeedbackItemProp = {
    feedbackItem: TFeedbackItem;
};

export default function FeedbackItem({ feedbackItem }: FeedbackItemProp) {
    return (
        <li className="feedback">
            <button>
                <TriangleUpIcon />
                <span>{feedbackItem.upvoteCount}</span>
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