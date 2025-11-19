
import reviewsData from "./mockdata";
import Pagination from "../../components/Pagination";
import Header from "./reviewSections/Header";
import RatingsOverview from "./reviewSections/RatingsOverview";
import ReviewList from "./reviewSections/ReviewList";
import Filters from "./reviewSections/Filters";

const Review = () => {
  return (
    <main className="page-review container mx-auto p-6">
      <Header name="Alex Doe" subtitle="Ratings & Reviews" avatarUrl="https://i.pravatar.cc/96?img=12" />
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RatingsOverview summary={reviewsData.summary} />
          <div className="mt-6">
            <Filters />
            <ReviewList comments={reviewsData.comments} />
            <div className="mt-6 flex justify-center"><Pagination totalPages={3} currentPage={1} /></div>
          </div>
        </div>
        <aside className="lg:col-span-1"></aside>
      </div>
    </main>
  );
};

export default Review;