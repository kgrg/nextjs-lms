import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
    req: Request
) {
    try {
        const { userId } = auth()
        const { title } = await req.json()

        if (!userId) {
            return new NextResponse("Unauthorize", { status: 401 })
        }

        const course = await db.course.create({
            data: {
                title,
                userId
            }
        })

        return NextResponse.json(course);

    } catch (error) {
        console.log(error)
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}