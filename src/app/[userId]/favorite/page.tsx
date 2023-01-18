import { Suspense } from "react";
import ParcialLoading from "../../@Components/Animations/ParciaLoading";
import FavoritedReview from "../components/FavoritedReviews";

export default async function ({ params }: { params: { userId: string } }) {
  return (
    <div className="">
      <Suspense fallback={<ParcialLoading />}>
        <FavoritedReview userId={params.userId} />
      </Suspense>
    </div>
  );
}
