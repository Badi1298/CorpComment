import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";

import { TFeedbackItem } from "../../lib/types";

import Spinner from "../Spinner";
import FeedbackItem from "./FeedbackItem";

export default function FeedbackList() {
    const isLoading = useFeedbackItemsStore((state) => state.isLoading);
    const feedbackItems = useFeedbackItemsStore((state) =>
        state.getFilteredFeedbacks()
    );

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
