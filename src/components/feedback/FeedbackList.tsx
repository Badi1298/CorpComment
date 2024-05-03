import { TFeedbackItem } from "../../lib/types";

import Spinner from "../Spinner";
import FeedbackItem from "./FeedbackItem";

type FeedbackListProps = {
    isLoading: boolean;
    feedbackItems: TFeedbackItem[];
};

export default function FeedbackList({
    isLoading,
    feedbackItems,
}: FeedbackListProps) {
    return (
        <ol className="feedback-list">
            {isLoading ? (
                <Spinner />
            ) : (
                feedbackItems.map((item: TFeedbackItem) => (
                    <FeedbackItem key={item.id} feedbackItem={item} />
                ))
            )}
        </ol>
    );
}
