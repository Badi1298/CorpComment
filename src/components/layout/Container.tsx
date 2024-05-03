import { TFeedbackItem } from "../../lib/types";

import Header from "./Header";
import FeedbackList from "../feedback/FeedbackList";

type ContainerProps = {
    isLoading: boolean;
    feedbackItems: TFeedbackItem[];
    handleAddFeedback: (text: string) => void;
};

export default function Container({
    isLoading,
    feedbackItems,
    handleAddFeedback,
}: ContainerProps) {
    return (
        <main className="container">
            <Header handleAddFeedback={handleAddFeedback} />
            <FeedbackList isLoading={isLoading} feedbackItems={feedbackItems} />
        </main>
    );
}
