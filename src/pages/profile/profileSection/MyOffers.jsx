import { offers } from "../mockdata";
import EmptyState from "./EmptyState";
import OfferCard from "./OfferCard";

const MyOffers = () => {
  const handleView = (id) => {
    console.log("View offer", id);
  };

  const handleEdit = (id) => {
    console.log("Edit offer", id);
  };

  const handleDelete = (id) => {
    console.log("Delete offer", id);
  };

  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        {offers.length > 0 ? (
          offers.map((offer) => (
            <OfferCard
              key={offer.id}
              title={offer.title}
              status={offer.status}
              date={offer.date}
              image={offer.image}
              onView={() => handleView(offer.id)}
              onEdit={() => handleEdit(offer.id)}
              onDelete={() => handleDelete(offer.id)}
            />
          ))) : (
          <EmptyState />
        )
        }
      </div>
    </div>
  );

}
export default MyOffers