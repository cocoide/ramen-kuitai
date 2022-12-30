
import FetchReview from './components/FetchReview'
import CreateReview from './components/CreateReview';
import axios from 'axios';
import { API_URL } from '../../libs/client/constants';
import { use } from 'react';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '../../libs/server/auth';


async function fetchYourReview() {
    const body = await axios.get(`${API_URL}/review`)
    const { data } = body
    return data
};

const page = () => {
    const review = use(fetchYourReview())
    console.log(review)
    const session = unstable_getServerSession(authOptions);
    return (
        <div className='bg-white'>
            <CreateReview />
            <FetchReview review={review} session={session} />
        </div>
    )
}
export default page