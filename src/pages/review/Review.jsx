import reviewsData from "./mockdata";
import Pagination from "../../components/Pagination";
import Header from "./reviewSections/Header";
import RatingsOverview from "./reviewSections/RatingsOverview";
import Filters from "./reviewSections/Filters";
import ReviewList from "./reviewSections/ReviewList";

const Review = () => {
  return (
    // added bg-gray-50 and min-h-screen so the page background matches the screenshot
    <main className="page-review bg-gray-50 min-h-screen container mx-auto p-6 max-w-6xl">
      <Header name="Alex Doe" subtitle="Ratings & Reviews" avatarUrl="https://i.pravatar.cc/96?img=12" />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RatingsOverview summary={reviewsData.summary} />
          <div className="mt-6 bg-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">All Reviews</h3>
              <Filters />
            </div>

            <ReviewList comments={reviewsData.comments} />

            <div className="mt-6 flex justify-center">
              <Pagination totalPages={reviewsData.pagination.totalPages} currentPage={reviewsData.pagination.currentPage} />
            </div>
          </div>
        </div>

        <aside className="lg:col-span-1">
          {/* intentionally left blank for layout parity with screenshot */}
        </aside>
      </div>
    </main>
  );
};

export default Review;