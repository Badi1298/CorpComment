import { useEffect, useState } from 'react';

import FeedbackItem from './FeedbackItem';

type FeedbackItem = {
    id: number;
    upvoteCount: number;
    badgeLetter: string;
    companyName: string;
    text: string;
    daysAgo: number;
};

export default function FeedbackList() {
    const [feedbackItems, setFeedbackItems] = useState([]);

    useEffect(() => {
        fetch(
            'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'
        )
            .then(res => res.json())
            .then(data => setFeedbackItems(data.feedbacks));
    }, []);

    return (
        <ol className="feedback-list">
            {feedbackItems.map((item: FeedbackItem) => (
                <FeedbackItem key={item.id} feedbackItem={item} />
            ))}
        </ol>
    );
}
