import { claims } from "../mockdata";
import EmptyState from "./EmptyState";
import OfferCard from "./OfferCard";


const MyClaims = () => {

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
        {claims.length > 0 ? (
          claims.map((claim) => (
            <OfferCard
              key={claim.id}
              title={claim.title}
              status={claim.status}
              date={claim.date}
              image={claim.image}
              onView={() => handleView(claim.id)}
              onEdit={() => handleEdit(claim.id)}
              onDelete={() => handleDelete(claim.id)}
            />
          ))) :(
            <EmptyState/>
          )
        }
      </div>
    </div>
  );

}

export default MyClaims