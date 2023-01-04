"use client"
// https://zenn.dev/uzimaru0000/articles/react-hook-form-with-zod

import axios from 'axios'
import * as z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from 'next/navigation';
import { FlagIcon, StarIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import { API_URL } from '../../../libs/client/constants';
import { cn } from '../../../utils/cn';
import { reviewCreateSchema } from '../../../libs/server/validations/review';
import { useSetRecoilState } from 'recoil';
import { isReviewModalOpen } from '../../../@types/models/Modal';

type FormData = z.infer<typeof reviewCreateSchema>

const CreateReview = () => {
    const router = useRouter()
    const { register, handleSubmit, reset, setValue } = useForm<FormData>({
        resolver: zodResolver(reviewCreateSchema),
    });
    const openReviewModal = useSetRecoilState(isReviewModalOpen);
    const [isLoading, setLoading] = useState(false)


    const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
        setLoading(true);
        // onSubmit後にボタンを非活性にすることで二重送信を防止
        const toastId = toast.loading("投稿作成中...");
        try {
            const body = reviewCreateSchema.parse(data);
            await axios.post(`${API_URL}/review`, body)
            toast.success("投稿の作成に成功🎉", {
                id: toastId,
            });
            openReviewModal(false);
            setLoading(false)
            router.refresh()
            // reset()
            // Modalを閉じたらリセットされるので必要ないかもしれない
        } catch (error) {
            console.log(error)
            toast.error("投稿の作成に失敗", {
                id: toastId,
            });
            setLoading(false)
        }
    };
    const [rating, setRating] = useState(0)
    return (

        <div className="">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center space-y-2 mx-5 bg-white p-5">
                <input {...register('title')} className="h-10 w-30 p-1 rounded-md bg-gray-100" />
                {/* Title */}
                <input {...register('description')} className="h-10 w-30 p-1 rounded-md bg-gray-100" />
                {/* Content  */}
                <div className="flex justify-center">
                    {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                            <button type="button" key={index}
                                className={cn(index <= rating ? "text-yellow-300" : "text-gray-200", "hover:scale-110 duration-200")}
                                onClick={() => {
                                    setRating(index)
                                    setValue("valuation", index)
                                }}><StarIcon className="h-8 w-8" />
                            </button>
                        )
                    })}
                </div>
                {/* Rating */}

                {/* <input {...register('image')} className="h-10 w-30 p-1 rounded-md bg-gray-200" /> */}

                <div className="flex justify-center">
                    {/* https://dev.to/michaelburrows/create-a-custom-react-star-rating-component-5o6 */}

                    <button type="submit" className={cn("bg-[#c3b9a8] text-white rounded-md p-2 mt-5 flex space-x-1 font-medium justify-center place-items-center",
                        (isLoading) ? "disabled:" : ""
                    )}>
                        <FlagIcon className="text-white w-7 h-7 p-1" />
                        <div>作成</div>
                    </button>
                </div>
                {/* Submit button */}
            </form>
        </div>
    )

}

export default CreateReview
