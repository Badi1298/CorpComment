import React, { useState } from 'react';

import { MAX_CHARACTERS } from '../lib/constants';

export default function FeedbackForm() {
    const [feedback, setFeedback] = useState('');

    const charCount = MAX_CHARACTERS - feedback.length;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.target.value;
        if (newText.length > MAX_CHARACTERS) return;

        setFeedback(newText);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(feedback);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <textarea
                value={feedback}
                name="feedback-textarea"
                id="feedback-textarea"
                placeholder="aaaa"
                spellCheck="false"
                onChange={handleChange}
            ></textarea>
            <label htmlFor="feedback-textarea">
                Enter your feedback here, remember to #hashtag your company.
            </label>

            <div>
                <p className="u-italic">{charCount}</p>
                <button type="submit">
                    <span>Submit</span>
                </button>
            </div>
        </form>
    );
}
