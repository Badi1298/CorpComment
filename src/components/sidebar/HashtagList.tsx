import React from "react";

import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";

export default function HashtagList() {
    const companyList = useFeedbackItemsStore((state) =>
        state.getCompanyList()
    );
    const selectCompany = useFeedbackItemsStore((state) => state.selectCompany);

    return (
        <ul className="hashtags">
            {companyList.map(
                (company: string): React.ReactNode => (
                    <li key={company}>
                        <button onClick={() => selectCompany(company)}>
                            #{company}
                        </button>
                    </li>
                )
            )}
        </ul>
    );
}
