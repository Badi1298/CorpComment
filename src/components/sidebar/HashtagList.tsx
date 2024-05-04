type HashtagListProps = {
    companyList: string[];
    onSelectCompany: (company: string) => void;
};

export default function HashtagList({
    companyList,
    onSelectCompany,
}: HashtagListProps) {
    return (
        <ul className="hashtags">
            {companyList.map((company) => (
                <li key={company}>
                    <button onClick={() => onSelectCompany(company)}>
                        #{company}
                    </button>
                </li>
            ))}
        </ul>
    );
}
