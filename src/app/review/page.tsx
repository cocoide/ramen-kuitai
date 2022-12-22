
import { Spinner } from '../@Components/Animations/Spinner'
import FetchReview from './components/FetchReview'
import { useAuth } from '../../utils/hooks/useAuth';
import CreateReview from './components/CreateReview';




const page = () => {
    return (
        <div className='bg-white'>
            <CreateReview />
            {/* <FetchReview /> */}
        </div>
    )
}
export default page