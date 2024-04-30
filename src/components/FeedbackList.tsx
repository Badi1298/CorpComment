import { useEffect, useState } from 'react';

import { TFeedbackItem } from '../lib/types';

import FeedbackItem from './FeedbackItem';

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
            {feedbackItems.map((item: TFeedbackItem) => (
                <FeedbackItem key={item.id} feedbackItem={item} />
            ))}
        </ol>
    );
}
