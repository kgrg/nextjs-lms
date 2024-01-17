import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    { params }: { params: { courseId: string } }
) {
    try {
        const { userId } = auth()

        const values = await req.json()

        if (!userId) {
            return new NextResponse("Unauthorize", { status: 401 })
        }

        const course = await db.course.update({
            data: {
                ...values
            },
            where: {
                id: params.courseId
            }
        })

        return NextResponse.json(course);

    } catch (error) {
        console.log(error)
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}