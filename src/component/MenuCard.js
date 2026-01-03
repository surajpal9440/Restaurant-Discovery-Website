import RestInfo from "./RestInfo";

export default function MenuCard({ menuSection }) {
  return (
    <div className="w-full mt-10">
      <p className="text-xl font-bold mb-2">{menuSection?.title}</p>
      <div className="space-y-4">
        {menuSection?.itemCards?.map((items) => (
          <RestInfo key={items?.card?.info?.id} restData={items?.card?.info} />
        ))}
      </div>
    </div>
  );
}
