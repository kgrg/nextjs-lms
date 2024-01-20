import { IconBadge } from "@/components/icon-badge";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { Cat, Circle, CircleDollarSign, File, LayoutDashboard, ListChecks } from "lucide-react";
import { redirect } from "next/navigation";

import { use } from "react";
import TitleForm from "./components/title-form";
import { Description } from "@radix-ui/react-dialog";
import DescriptionForm from "./components/description-form";
import ImageForm from "./components/image-form";
import CategoryForm from "./components/category-from";
import PriceForm from "./components/price-form";
import AttachemntForm from "./components/attachment-form";

const CourseIdPage = async ({
    params
}: { params: { courseId: string } }) => {

    const { userId } = auth()

    if (!userId) {
        return redirect("/")
    }

    const course = await db.course.findFirst({
        where: {
            id: params.courseId,
            userId: userId
        },
        include: {
            attachments: {
                orderBy: {
                    createdAt: "asc"
                }
            }
        }
    })

    const categories = await db.category.findMany({
        orderBy: {
            name: "asc"
        }
    })

    if (!course) {
        return redirect("/")
    }

    const requiredFields = [
        course.title,
        course.description,
        course.imageUrl,
        course.price,
        course.categoryId
    ]

    const totalFields = requiredFields.length
    const completedFields = requiredFields.filter(Boolean).length

    const completionText = `${completedFields} / ${totalFields}`

    return (
        <div className="p-6">
            <div className="flex items-center justify-between">
                <div className=" flex flex-col gap-y-2">
                    <h1 className="text-2xl font-medium">
                        Course Setup
                    </h1>
                    <span className="text-sm text-slate-600">
                        {completionText} completed
                    </span>
                </div>
                <div>
                    <button className="btn btn-primary">
                        Edit course
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                <div>
                    <div className="flex items-center gap-x-2">
                        <IconBadge size="small" icon={LayoutDashboard} />
                        <h2 className="text-xl">
                            Customize your course
                        </h2>
                    </div>
                    <TitleForm
                        initialData={course}
                        courseId={params.courseId}
                    />
                    <DescriptionForm
                        initialData={course}
                        courseId={params.courseId}
                    />
                    <ImageForm
                        initialData={course}
                        courseId={params.courseId}
                    />
                    <CategoryForm
                        initialData={course}
                        courseId={params.courseId}
                        options={categories.map((category) => ({
                            label: category.name,
                            value: category.id
                        }))}
                    />
                </div>
                <div className="space-y-6">
                    <div>
                        <div className="flex items-center gap-x-2">
                            <IconBadge icon={ListChecks} />
                            <h2 className="text-xl">
                                Course chapters
                            </h2>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <IconBadge icon={CircleDollarSign} />
                            <h2 className="text-xl">
                                Sell you Course
                            </h2>
                        </div>
                        <div className="space-y-6">
                            <PriceForm
                                initialData={course}
                                courseId={params.courseId}
                            />
                        </div>

                        <div className="space-y-6 mt-6">
                            <div className=" flex items-center gap-x-2">
                                <IconBadge icon={File} />
                                <h2 className="text-xl">
                                    Resources and attachemnts
                                </h2>
                            </div>

                            <div>
                                <AttachemntForm
                                    initialData={course}
                                    courseId={params.courseId}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseIdPage;