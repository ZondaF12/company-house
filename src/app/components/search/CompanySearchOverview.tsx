import React from "react";

type Props = {
    companyData: any;
    primaryColour: string;
    companyType: string;
};

const CompanySearchOverview = ({
    companyData,
    primaryColour,
    companyType,
}: Props) => {
    const dateFormatter = (dateString: string) => {
        const date = new Date(dateString);

        if (isNaN(+date)) {
            return "N/A";
        }

        const month = date.toLocaleString("default", { month: "long" });
        const formattedDateString = `${date.getDate()} ${month} ${date.getFullYear()}`;
        return formattedDateString;
    };

    const getYearEnd = (dateString: string) => {
        const date = new Date(dateString);
        const month = date.toLocaleString("default", { month: "long" });

        return month;
    };

    return (
        <div className="pb-2">
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="grid">
                <div className="mb-8 grid grid-cols-2">
                    <div className="flex flex-col">
                        <p className="text-gray-400 text-sm">Company Type</p>
                        <div className="pt-2 w-fit">
                            <p
                                className="text-xs rounded-full px-2 py-1 text-center bg-opacity-25 h-6"
                                style={{
                                    backgroundColor: primaryColour,
                                }}
                            >
                                {companyType ? companyType : "Unknown"}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col w-fit">
                        <p className="text-gray-400 text-sm">Year End</p>
                        <div className="pt-2">
                            <p
                                className="text-xs rounded-full px-2 py-1 text-center bg-opacity-25 h-6"
                                style={{
                                    backgroundColor: primaryColour,
                                }}
                            >
                                {getYearEnd(companyData?.date_of_creation)}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mb-2 grid grid-cols-2">
                    <div className="flex flex-col">
                        <p className="text-gray-400 text-sm">Accounts</p>
                    </div>
                    <div className="flex flex-col w-fit">
                        <p className="text-gray-400 text-sm">
                            Confirmation Statement
                        </p>
                    </div>
                </div>
                <div className="mb-2 grid grid-cols-2">
                    <DataItem
                        title="Next made up to:"
                        date={dateFormatter(
                            companyData?.accounts?.next_made_up_to
                        )}
                        backgroundColor={primaryColour}
                    />
                    <DataItem
                        title="Next made up to:"
                        date={dateFormatter(
                            companyData?.confirmation_statement?.next_made_up_to
                        )}
                        backgroundColor={primaryColour}
                    />
                </div>
                <div className="mb-2 grid grid-cols-2">
                    <DataItem
                        title="Due by:"
                        date={dateFormatter(companyData?.accounts?.next_due)}
                        backgroundColor={primaryColour}
                    />
                    <DataItem
                        title="Due by:"
                        date={dateFormatter(
                            companyData?.confirmation_statement?.next_due
                        )}
                        backgroundColor={primaryColour}
                    />
                </div>
                <div className="mb-2 grid grid-cols-2">
                    <DataItem
                        title="Last made up to:"
                        date={dateFormatter(
                            companyData?.accounts?.last_accounts?.made_up_to
                        )}
                        backgroundColor={primaryColour}
                    />
                    <DataItem
                        title="Last made up to:"
                        date={dateFormatter(
                            companyData?.confirmation_statement?.last_made_up_to
                        )}
                        backgroundColor={primaryColour}
                    />
                </div>
            </div>
        </div>
    );
};

export default CompanySearchOverview;

type DataItemProp = {
    title: string;
    date: string;
    backgroundColor: string;
};
function DataItem({ title, date, backgroundColor }: DataItemProp): JSX.Element {
    return (
        <div className="flex flex-col">
            <p className="text-xs">{title}</p>
            <div className="pt-2 w-fit">
                <p
                    className="text-xs rounded-full px-2 py-1 text-center bg-opacity-25"
                    style={{
                        backgroundColor: backgroundColor,
                    }}
                >
                    {date}
                </p>
            </div>
        </div>
    );
}
