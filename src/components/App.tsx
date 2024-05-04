import { useEffect, useMemo, useState } from "react";

import { TFeedbackItem } from "../lib/types";

import Footer from "./layout/Footer";
import Container from "./layout/Container";
import HashtagList from "./sidebar/HashtagList";

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [feedbackItems, setFeedabackItems] = useState<TFeedbackItem[]>([]);
    const [selectedCompany, setSelectedCompany] = useState("");

    const companyList = useMemo(
        () => [...new Set(feedbackItems.map((item) => item.company))],
        [feedbackItems]
    );

    const filteredFeedbacks = useMemo(
        () =>
            selectedCompany
                ? feedbackItems.filter(
                      (item) => item.company === selectedCompany
                  )
                : feedbackItems,
        [selectedCompany, feedbackItems]
    );

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

    const handleAddFeedback = (text: string): void => {
        const company = text
            .split(" ")
            .find((word) => word.includes("#"))!
            .substring(1);

        const newFeedback: TFeedbackItem = {
            id: new Date().getTime(),
            badgeLetter: company?.substring(0, 1).toUpperCase(),
            company,
            text,
            daysAgo: 0,
            upvoteCount: 0,
        };

        setFeedabackItems([...feedbackItems, newFeedback]);
    };

    const handleSelectCompany = (company: string): void => {
        setSelectedCompany(company);
    };

    return (
        <div className="app">
            <Footer />
            <Container
                isLoading={isLoading}
                feedbackItems={filteredFeedbacks}
                handleAddFeedback={handleAddFeedback}
            />
            <HashtagList
                companyList={companyList}
                onSelectCompany={handleSelectCompany}
            />
        </div>
    );
}

export default App;
