import { useEffect } from "react";

import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";

import Footer from "./layout/Footer";
import Container from "./layout/Container";
import HashtagList from "./sidebar/HashtagList";

function App() {
    const fetchFeedbacksData = useFeedbackItemsStore(
        (state) => state.fetchFeedbacksData
    );

    useEffect(() => {
        fetchFeedbacksData();
    }, [fetchFeedbacksData]);

    return (
        <div className="app">
            <Footer />
            <Container />
            <HashtagList />
        </div>
    );
}

export default App;
