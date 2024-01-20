"use client"
import * as z from 'zod';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { File, ImageIcon, Loader2, Pencil, PlusCircle, X } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Attachment, Course } from '@prisma/client';
import Image from 'next/image';
import { FileUpload } from '@/components/file-upload';

interface AttachemntFormProps {
    initialData: Course & { attachments: Attachment[] };
    courseId: string;
}

const formSchema = z.object({
    url: z.string()
});

const AttachemntForm = ({ initialData, courseId }: AttachemntFormProps) => {

    const [isEditing, setIsEditing] = useState(false);

    const [deletingId, setDeletingId] = useState<string | null>(null);

    const router = useRouter();

    const toggleEdit = () => setIsEditing(!isEditing)

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.post(`/api/courses/${courseId}/attachement`, values);
            toast.success("course updated successfully")
            toggleEdit();
            return router.refresh();
        } catch (error) {
            toast.error("something went wrong")
        }
    };

    const onDelete = async (id: string) => {
        try {
            setDeletingId(id);
            await axios.delete(`/api/courses/${courseId}/attachement/${id}`);
            toast.success("attachement deleted  successfully")
            return router.refresh();
        } catch (error) {
            toast.error("something went wrong")
        } finally {
            setDeletingId(null);
        }
    }

    return (
        <div className='mt-6 border bg-slate-100 rounded-md p-4'>
            <div className='font-medium flex items-center justify-between'>
                Course attachements
                <Button variant='ghost' onClick={toggleEdit}>
                    {isEditing && (
                        <>
                            Cancel
                        </>
                    )}
                    {!isEditing && (
                        <>
                            <PlusCircle className='h-4 w-4 mr-2' />
                            Add Attachements
                        </>
                    )}

                </Button>
            </div>

            {!isEditing && (
                initialData.attachments.length === 0 && (
                    <div className='space-y-2 flex items-center italic'>
                        No Attachements added yet
                    </div>
                )
            )}
            {
                initialData.attachments.length > 0 && (
                    <div className='space-y-2'>
                        {initialData.attachments.map((attachment) => (
                            <div
                                key={attachment.id}
                                className='flex items-center p-3 w-full bg-sky-100 border-sky-200 border text-sky-700 rounded-md'
                            >
                                <File
                                    className='h-4 w-4 mr-2 flex-shrink-0'
                                />
                                <p className='text-xs line-clamp-1'>
                                    {attachment.url}
                                </p>
                                {deletingId === attachment.id && (
                                    <div>
                                        <Loader2 className='h-4 w-4 animate-spin' />
                                    </div>
                                )}
                                {deletingId !== attachment.id && (
                                    <div>
                                        <button className='ml-auto hover:opacity-75 transition' onClick={() => onDelete(attachment.id)}>
                                            <X className='h-4 w-4' />
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )
            }

            {isEditing && (
                <div>
                    <FileUpload
                        endpoint='courseAttachment'
                        onChange={(url) => {
                            if (url) {
                                onSubmit({ url: url })
                            }
                        }}
                    />
                    <div className='text-xs text-muted-foreground mt-4'>
                        Add anything your student might need to complete the course
                    </div>
                </div>
            )}

        </div>
    );
}

export default AttachemntForm;