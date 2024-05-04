import { create } from "zustand";
import { TFeedbackItem } from "../lib/types";

interface FeedbackItemsState {
    isLoading: boolean;
    feedbackItems: TFeedbackItem[];
    selectedCompany: string;
    getCompanyList: () => string[];
    getFilteredFeedbacks: () => TFeedbackItem[];
    fetchFeedbacksData: () => Promise<void>;
    addFeedback: (text: string) => void;
    selectCompany: (company: string) => void;
}

export const useFeedbackItemsStore = create<FeedbackItemsState>()(
    (set, get) => ({
        isLoading: false,
        feedbackItems: [],
        selectedCompany: "",

        getCompanyList: () => {
            return [
                ...new Set(get().feedbackItems.map((item) => item.company)),
            ];
        },

        getFilteredFeedbacks: () => {
            return get().selectedCompany
                ? get().feedbackItems.filter(
                      (item) => item.company === get().selectedCompany
                  )
                : get().feedbackItems;
        },

        fetchFeedbacksData: async () => {
            set(() => ({ isLoading: true }));
            try {
                const response = await fetch(
                    "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
                );

                if (!response.ok) throw new Error();

                const data = await response.json();
                set(() => ({ feedbackItems: data.feedbacks }));
            } catch (error) {
                console.log(error);
            } finally {
                set(() => ({ isLoading: false }));
            }
        },

        addFeedback: (text: string): void => {
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

            set((state) => ({
                feedbackItems: [...state.feedbackItems, newFeedback],
            }));
        },

        selectCompany: (company: string): void => {
            set(() => ({ selectedCompany: company }));
        },
    })
);
