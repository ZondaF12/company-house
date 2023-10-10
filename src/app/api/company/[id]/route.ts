import { NextRequest, NextResponse } from "next/server";
import got from "got";
require("dotenv").config();

async function fetchCompanyDetails(companyId: string) {
    const basicAuth = Buffer.from(`${process.env.GOV_API_KEY}:`).toString(
        "base64"
    );

    const res = await got
        .get(
            `https://api.company-information.service.gov.uk/company/${companyId}`,
            {
                headers: {
                    Authorization: `Basic ${basicAuth}`,
                },
            }
        )
        .json();

    return res;
}

type Params = {
    params: {
        id: string;
    };
};

export async function GET(request: Request, context: Params) {
    const res = await fetchCompanyDetails(context.params.id);
    return NextResponse.json(res);
}
