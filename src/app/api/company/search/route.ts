import { NextRequest, NextResponse } from "next/server";
import got from "got";
require("dotenv").config();

async function fetchCompanies(companyName: string) {
    const basicAuth = Buffer.from(`${process.env.GOV_API_KEY}:`).toString(
        "base64"
    );

    const res = await got
        .get(
            `https://api.company-information.service.gov.uk/search/companies?q=${companyName}`,
            {
                headers: {
                    Authorization: `Basic ${basicAuth}`,
                },
            }
        )
        .json();

    return res;
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const company = searchParams.get("company")!;

    const res = await fetchCompanies(company);

    return NextResponse.json(res);
}
