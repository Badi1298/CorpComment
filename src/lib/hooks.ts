import { useEffect, useState } from "react";

import { TFeedbackItem } from "./types";

export const useFeedbackItems = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [feedbackItems, setFeedabackItems] = useState<TFeedbackItem[]>([]);

    useEffect(() => {
        fetchFeedbacksData();
    }, []);

    const fetchFeedbacksData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
            );

            if (!response.ok) throw new Error();

            const data = await response.json();
            setFeedabackItems(data.feedbacks);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, setIsLoading, feedbackItems, setFeedabackItems };
};
