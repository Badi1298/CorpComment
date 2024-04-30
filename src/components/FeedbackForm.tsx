export default function FeedbackForm() {
    return (
        <form className="form">
            <textarea
                name="feedback-textarea"
                id="feedback-textarea"
                placeholder="aaaa"
                spellCheck="false"
            ></textarea>
            <label htmlFor="feedback-textarea">
                Enter your feedback here, remember to #hashtag your company.
            </label>

            <div>
                <p className="u-italic">150</p>
                <button>
                    <span>Submit</span>
                </button>
            </div>
        </form>
    );
}
