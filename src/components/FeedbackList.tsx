import { TriangleUpIcon } from '@radix-ui/react-icons';

export default function FeedbackList() {
    return (
        <ol className="feedback-list">
            <li className="feedback">
                <button>
                    <TriangleUpIcon />
                    <span>593</span>
                </button>

                <div>
                    <p>B</p>
                </div>

                <div>
                    <p>Serban</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Beatae hic alias, nostrum omnis nemo esse.
                    </p>
                </div>
            </li>
        </ol>
    );
}
