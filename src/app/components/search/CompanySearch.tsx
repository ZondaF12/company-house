import React, { useEffect, useState } from "react";
import Spinner from "../Spinner";
import CompanySearchOverview from "./CompanySearchOverview";
import CompanySearchFilings from "./CompanySearchFilings";
import CompanySearchPeople from "./CompanySearchPeople";
import CompanySearchPeriods from "./CompanySearchPeriods";

type Props = {
    status: "active" | "liquidation" | "dissolved" | "registered";
    companyName: string;
    address: string;
    description: string;
    companyId: string;
};

const colours = {
    active: "#66bb6a",
    liquidation: "#ffc107",
    dissolved: "#d32f2f",
    registered: "#42a5f5",
};

const statusIndicatorColours = {
    active: "rgba(102, 187, 106, 0.5)",
    liquidation: "rgba(255, 193, 7, 0.5)",
    dissolved: "rgba(211, 47, 47, 0.5)",
    registered: "rgba(66, 165, 245, 0.5)",
};

const companyType: any = {
    ltd: "Private Limited Company",
    plc: "Public Limited Company",
};

const CompanySearch = ({ ...props }: Props) => {
    const { status, companyName, address, description, companyId } = props;
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showMore, setShowMore] = useState<boolean>(false);
    const [companyData, setCompanyData] = useState<any>({});
    const [isActiveButton, setIsActiveButton] = useState<string>("");

    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const handleOverview = async () => {
        if (isActiveButton === "o") {
            setIsActiveButton("");
            setShowMore(false);
            return;
        }

        setIsActiveButton("o");

        setShowMore(true);
        setIsLoading(true);

        const res = await (await fetch(`/api/company/${companyId}`)).json();
        setCompanyData(res);
    };

    const handleFilings = async () => {
        if (isActiveButton === "f") {
            setIsActiveButton("");
            setShowMore(false);
            return;
        }

        setIsActiveButton("f");

        setShowMore(true);
        setIsLoading(true);

        const res = await (
            await fetch(`/api/company/${companyId}/filing-history`)
        ).json();
        setCompanyData(res);
    };

    const handlePeople = async () => {
        if (isActiveButton === "p") {
            setIsActiveButton("");
            setShowMore(false);
            return;
        }

        setIsActiveButton("p");

        setShowMore(true);
        setIsLoading(true);

        // const res = await (await fetch(`/api/company/${companyId}`)).json();
        // setCompanyData(res);
    };

    const handlePeriods = async () => {
        if (isActiveButton === "pd") {
            setIsActiveButton("");
            setShowMore(false);
            return;
        }

        setIsActiveButton("pd");

        setShowMore(true);
        setIsLoading(true);

        // const res = await (await fetch(`/api/company/${companyId}`)).json();
        // setCompanyData(res);
    };

    useEffect(() => {
        setIsLoading(false);
    }, [companyData]);

    return (
        <div
            className="flex flex-col w-full mt-8 border rounded-md px-4 py-3 shadow-md"
            style={{
                borderColor: `${colours[status]}`,
            }}
        >
            <div className="flex justify-between mb-4">
                <div>{companyName}</div>
                <div className="pl-2 flex h-6 space-x-2">
                    <div>
                        <p
                            className="text-xs rounded-full px-2 py-1 text-center bg-opacity-25 h-6"
                            style={{
                                backgroundColor: `${statusIndicatorColours[status]}`,
                            }}
                        >
                            {capitalizeFirstLetter(status)}
                        </p>
                    </div>

                    <button>
                        <p className="text-xs bg-black rounded-full px-2 py-1 text-center text-white h-6">
                            Save
                        </p>
                    </button>
                </div>
            </div>
            <div className="text-sm text-gray-400 w-[80%]">{description}</div>
            <div className="text-sm w-[80%]">{address}</div>
            <div className="pt-4 grid grid-cols-2 gap-2 md:flex md:gap-0">
                <button
                    type="button"
                    className="py-2 px-5 mr-1 lg:mr-2 text-sm font-medium focus:outline-none  rounded-lg border hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    style={{
                        color:
                            isActiveButton === "o" ? "#fff" : colours[status],
                        borderColor: `${colours[status]}`,
                        backgroundColor:
                            isActiveButton === "o" ? colours[status] : "#fff",
                    }}
                    onClick={handleOverview}
                >
                    Overview
                </button>
                <button
                    type="button"
                    className="py-2 px-5 mr-1 lg:mr-2 text-sm font-medium focus:outline-none bg-white rounded-lg border hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    style={{
                        color:
                            isActiveButton === "f" ? "#fff" : colours[status],
                        borderColor: `${colours[status]}`,
                        backgroundColor:
                            isActiveButton === "f" ? colours[status] : "#fff",
                    }}
                    onClick={handleFilings}
                >
                    Filings
                </button>
                <button
                    type="button"
                    className="py-2 px-5 mr-1 lg:mr-2 text-sm font-medium focus:outline-none bg-white rounded-lg border  hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    style={{
                        color:
                            isActiveButton === "p" ? "#fff" : colours[status],
                        borderColor: `${colours[status]}`,
                        backgroundColor:
                            isActiveButton === "p" ? colours[status] : "#fff",
                    }}
                    onClick={handlePeople}
                >
                    People
                </button>
                <button
                    type="button"
                    className="py-2 px-5 mr-1 lg:mr-2 text-sm font-medium focus:outline-none bg-white rounded-lg border hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    style={{
                        color:
                            isActiveButton === "pd" ? "#fff" : colours[status],
                        borderColor: `${colours[status]}`,
                        backgroundColor:
                            isActiveButton === "pd" ? colours[status] : "#fff",
                    }}
                    onClick={handlePeriods}
                >
                    Periods
                </button>
            </div>
            {showMore ? (
                <div className="">
                    {isLoading ? (
                        <div className="h-20">
                            <Spinner colour={colours[status]} />
                        </div>
                    ) : isActiveButton === "o" ? (
                        <CompanySearchOverview
                            companyData={companyData}
                            primaryColour={statusIndicatorColours[status]}
                            companyType={companyType[companyData?.type]}
                        />
                    ) : isActiveButton === "f" ? (
                        <CompanySearchFilings
                            companyData={companyData}
                            primaryColour={colours[status]}
                        />
                    ) : isActiveButton === "p" ? (
                        <CompanySearchPeople />
                    ) : (
                        <CompanySearchPeriods />
                    )}
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default CompanySearch;
