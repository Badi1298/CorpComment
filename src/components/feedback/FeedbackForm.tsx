import React, { useState } from "react";

import { MAX_CHARACTERS } from "../../lib/constants";

type FeedbackFormProps = {
    onSubmit: (text: string) => void;
};

export default function FeedbackForm({ onSubmit }: FeedbackFormProps) {
    const [feedback, setFeedback] = useState("");
    const [showValidIndicator, setShowValidIndicator] = useState(false);
    const [showInvalidIndicator, setShowInvalidIndicator] = useState(false);

    const charCount = MAX_CHARACTERS - feedback.length;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.target.value;
        if (newText.length > MAX_CHARACTERS) return;

        setFeedback(newText);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Basic validation
        if (feedback.includes("#") && feedback.length >= 5) {
            setShowValidIndicator(true);
            setTimeout(() => {
                setShowValidIndicator(false);
            }, 2000);
        } else {
            setShowInvalidIndicator(true);
            setTimeout(() => {
                setShowInvalidIndicator(false);
            }, 2000);
            return;
        }

        onSubmit(feedback);
        setFeedback("");
    };

    return (
        <form
            className={`form ${showValidIndicator && "form--valid"} ${
                showInvalidIndicator && "form--invalid"
            }`}
            onSubmit={handleSubmit}
        >
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
