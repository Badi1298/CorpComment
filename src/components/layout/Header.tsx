import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";

import Logo from "../Logo";
import Pattern from "../Pattern";
import PageHeading from "../PageHeading";
import FeedbackForm from "../feedback/FeedbackForm";

export default function Header() {
    const addFeedback = useFeedbackItemsStore((state) => state.addFeedback);

    return (
        <header>
            <Pattern />
            <Logo />
            <PageHeading />
            <FeedbackForm onSubmit={addFeedback} />
        </header>
    );
}
