import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
    { params }: { params: { courseId: string } }
) {
    try {
        const { userId } = auth()

        const { url } = await req.json()

        if (!userId) {
            return new NextResponse("Unauthorize", { status: 401 })
        }
        
        const courseOwner = await db.course.findFirst({
            where: {
                id: params.courseId,
                userId
            }
        })

        if(!courseOwner) {
            return new NextResponse("Unauthorize", { status: 401 })
        }

        const course = await db.attachment.create({
            data: {
                url,
                name: url.split("/").pop(),
                courseId: params.courseId
            },
        })
        return NextResponse.json(course);
    } catch (error) {
        console.log("COURSE_ID_ATTACHEMENTS_ROUTE_ERROR", error)
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}