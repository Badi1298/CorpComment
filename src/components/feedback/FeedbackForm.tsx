import React, { useState } from "react";

import { MAX_CHARACTERS } from "../../lib/constants";

type FeedbackFormProps = {
    onSubmit: (text: string) => void;
};

export default function FeedbackForm({ onSubmit }: FeedbackFormProps) {
    const [feedback, setFeedback] = useState("");

    const charCount = MAX_CHARACTERS - feedback.length;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.target.value;
        if (newText.length > MAX_CHARACTERS) return;

        setFeedback(newText);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onSubmit(feedback);
        setFeedback("");
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
