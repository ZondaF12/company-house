import React from "react";

type Props = {
    companyData: any;
    primaryColour: string;
};

const CompanySearchFilings = ({ companyData, primaryColour }: Props) => {
    const dateFormatter = (dateString: string) => {
        const date = new Date(dateString);

        if (isNaN(+date)) {
            return "N/A";
        }

        const month = date.toLocaleString("default", { month: "long" });
        const formattedDateString = `${date.getDate()} ${month} ${date.getFullYear()}`;
        return formattedDateString;
    };

    return (
        <div className="pb-2">
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <div>
                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                    {companyData.items.map((filings: any) => (
                        <DataItem
                            title="foo"
                            date={dateFormatter(filings.date)}
                        />
                    ))}
                </ol>
                <Pagination
                    currentItem={companyData.start_index + 1}
                    nextItem={companyData.items_per_page}
                    totalEntries={companyData.total_count}
                    primaryColour={primaryColour}
                />
            </div>
        </div>
    );
};

export default CompanySearchFilings;

type DataItemProp = {
    title: string;
    date: string;
};
function DataItem({ title, date }: DataItemProp): JSX.Element {
    return (
        <li className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                    {date}
                </time>
                <div className="text-sm font-normal text-gray-500 dark:text-gray-300">
                    {title}
                </div>
            </div>
        </li>
    );
}

type PaginationProps = {
    currentItem: number;
    nextItem: number;
    totalEntries: number;
    primaryColour: string;
};

function Pagination({
    currentItem,
    nextItem,
    totalEntries,
    primaryColour,
}: PaginationProps): JSX.Element {
    return (
        <div className="flex flex-col items-center">
            <span className="text-sm text-gray-700 dark:text-gray-400">
                Showing{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                    {currentItem}
                </span>{" "}
                to{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                    {nextItem}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                    {totalEntries}
                </span>{" "}
                Entries
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
                <button
                    className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white  rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    style={{ backgroundColor: primaryColour }}
                >
                    <svg
                        className="w-3.5 h-3.5 mr-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 5H1m0 0 4 4M1 5l4-4"
                        />
                    </svg>
                    Prev
                </button>
                <button
                    className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white  border-0 border-l border-white rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    style={{ backgroundColor: primaryColour }}
                >
                    Next
                    <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
