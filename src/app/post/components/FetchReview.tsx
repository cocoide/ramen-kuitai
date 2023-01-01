import { StarIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import { Review } from '../../../@types/models/Review';
import { cn } from '../../../utils/cn';

{/* <use hooks>に関する注意点
https://zenn.dev/nishiurahiroki/articles/7e61590892499b */}


const FetchReview = ({ review, session }: { review: Review[], session: any }) => {
    return (
        session ?
            <div className="overflow-auto">
                {review.map(review => {
                return (
                    <div key={review.id} className="flex space-x-3 p-3 mx-10 my-5 bg-white rounded-md
                     h-50">

                        {(review.image) ?
                            <>
                                <Link href={`/review/${review.id}`}>
                                    <Image alt={review.title} src={review.image} width={100} height={100}
                                        className="rounded-md aspect-square h-40 w-40" />
                                </Link>
                            </>
                            :
                            // cannot display 
                            <Link href={`/review/${review.id}`}>
                                <div className="h-30 w-30 bg-gray-200 rounded-md" />
                            </Link>
                        }


                        <div className="flex flex-col">

                        <h2>{review.title}</h2>

                        <div className="flex">
                            {[...Array(5)].map((star, index) => {
                                index += 1;
                                return (
                                    <div key={index}
                                        className={cn(index <= review.rating ? "text-yellow-300" : "text-gray-200")}
                                    ><StarIcon className="h-6 w-6" />
                                    </div>
                                )
                            })}
                        </div>


                        </div>
                    </div>
                )
            })}

        </div>
            :
            (<div>
                <div>ログインしていません </div>
            </div>)
    )
}
export default FetchReview