import { NextResponse } from "next/server";

export const GET = async(req) => {
    const data = [
        { name: "Glen Armstrong" },
        { name: "Mamie Powell" },
        { name: "Jeanette Chavez" },
        { name: "Belle Jackson" },
        { name: "Georgia Cruz" },
        { name: "Corey Lee" },
        { name: "Brent Castro" },
        { name: "Luella Ford" },
        { name: "Harvey Little" },
    ];

    return NextResponse.json(data, { status: 200 });
};
