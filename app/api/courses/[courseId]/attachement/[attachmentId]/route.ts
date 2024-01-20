import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function DELETE(
    req: Request,
    { params }: { params: { attachmentId: string , courseId: string } }
) {
    try {
        const { userId } = auth()

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

        const course = await db.attachment.delete({
           where: {
            id: params.attachmentId
           }
        })
        return NextResponse.json(course);
    } catch (error) {
        console.log("COURSE_ID_ATTACHEMENTS_ROUTE_ERROR", error)
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}