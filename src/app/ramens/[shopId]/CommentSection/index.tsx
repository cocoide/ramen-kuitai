/* eslint-disable @typescript-eslint/no-misused-promises */
"use client"
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as z from "zod";
import { reviewCreateSchema } from '../../../../libs/server/validations/review';
import { zodResolver } from '@hookform/resolvers/zod';
import { API_URL } from '../../../../libs/client/constants';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { cn } from '../../../../utils/cn';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { PencilIcon } from '@heroicons/react/24/outline';

type FormData = z.infer<typeof reviewCreateSchema>
const CommentSection = ({ shopId }: { shopId: string }) => {
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        setValue("shopId", `${shopId}`)
    }, [])
    const { data: session } = useSession()
    const user = session?.user
    const router = useRouter()
    const { register, handleSubmit, setValue, reset, watch } = useForm<FormData>({
        resolver: zodResolver(reviewCreateSchema),
    })
    const [isLoading, setLoading] = useState(false)
    const [rating, setRating] = useState(0)

    const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
        setLoading(true);
        const toastId = toast.loading("投稿作成中...");
        try {
            const body = reviewCreateSchema.parse(data);
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            await axios.post(`${API_URL}/review`, body)
            toast.success("投稿の作成に成功🎉", {
                id: toastId,
            });
            setLoading(false)
            router.refresh()
            setRating(0)
            reset()
        } catch (e) {
            toast.error("投稿の作成に失敗", {
                id: toastId,
            });
            setLoading(false)
        }
    };
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const titleCount = watch("title")?.length || 0;
    return (
        <div className="rounded-md ring-1 ring-gray-200 p-3 my-5">
            <div className="flex justify-between items-center">
                <Image
                    src={user?.image as string}
                    alt={user?.id as string}
                    width={100}
                    height={100}
                    className="h-8 w-8 rounded-full ring-primary ring-1 ring-offset-2 bg-secondary mb-2"
                />
                <h2 className="text-gray-500">{titleCount}/50文字</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center space-y-2 bg-white">
                <textarea {...register('title')} className="w-30 p-1 rounded-md focus:ring-transparent ring-none border-none h-15"
                    placeholder="あなたのらあ活を共有" rows={2} />



                <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center">
                        {[...Array(5)].map((star, index) => {
                            index += 1;
                            return (
                                <button type="button" key={index}
                                    className={cn(index <= rating ? "text-yellow-300" : "text-gray-200", "hover:scale-110 duration-200")}
                                    onClick={() => {
                                        setRating(index)
                                        setValue("rating", index)
                                    }}><StarIcon className="h-6 w-6" />
                                </button>
                            )
                        })}
                    </div>
                    {/* Rating */}
                    {/* <input {...register('image')} className="h-10 w-30 p-1 rounded-md bg-gray-200" /> */}

                    <div className="flex justify-center">
                        <button type="submit" className={cn("bg-[#c3b9a8] text-white rounded-md p-1  flex space-x-1 font-medium justify-center place-items-center",
                            (isLoading) ? "disabled:" : ""
                        )}>
                            <PencilIcon className="text-white w-7 h-7 p-1" />
                            <div>投稿する</div>
                        </button>
                    </div>
                    {/* Submit button */}
                </div>
            </form>
        </div>
    )
}
export default CommentSection