"use client"
// https://zenn.dev/uzimaru0000/articles/react-hook-form-with-zod

import axios from 'axios'
import * as z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from 'next/navigation';
import { StarIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import { API_URL } from '../../../libs/client/constants';
import { cn } from '../../../utils/cn';
import { reviewCreateSchema } from '../../../libs/server/validations/review';
import Image from 'next/image';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

type FormData = z.infer<typeof reviewCreateSchema>

const CreateReview = () => {
    const router = useRouter()
    const { register, handleSubmit, reset, setValue } = useForm<FormData>({
        resolver: zodResolver(reviewCreateSchema),
    });


    const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
        const toastId = toast.loading("投稿作成中...");
        try {
            const body = reviewCreateSchema.parse(data);
            await axios.post(`${API_URL}/review`, body)
            toast.success("投稿の作成に成功🎉", {
                id: toastId,
            });
            router.refresh()
            reset()
        } catch (error) {
            console.log(error)
            toast.error("投稿の作成に失敗", {
                id: toastId,
            });
        }
    };
    const [rating, setRating] = useState(0)
    return (

        <div className="">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center space-y-2 mx-10 bg-white p-5">
                <input {...register('title')} className="h-10 w-30 p-1 rounded-md bg-gray-100" />
                {/* Title */}
                <div className="flex justify-center">
                    {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                            <button type="button" key={index}
                                className={cn(index <= rating ? "text-yellow-300" : "text-gray-200", "hover:scale-110 duration-200")}
                                onClick={() => {
                                    setRating(index)
                                    setValue("rating", index)
                                }}><StarIcon className="h-8 w-8" />
                            </button>
                        )
                    })}
                </div>
                {/* Rating */}

                <input {...register('content')} className="h-10 w-30 p-1 rounded-md bg-gray-100" />
                {/* <input {...register('image')} className="h-10 w-30 p-1 rounded-md bg-gray-200" /> */}

                <div className="flex justify-center">
                    {/* https://dev.to/michaelburrows/create-a-custom-react-star-rating-component-5o6 */}
                    <button type="submit" className="bg-[#FFAF19] text-white rounded-md p-2 ml-5 flex space-x-1
                font-medium">
                        <PaperAirplaneIcon className="text-white w-5 h-5" />
                        <div>送信</div>
                    </button>
                </div>
                {/* Submit button */}
            </form>
        </div>
    )

}

export default CreateReview
