export default function Card({ title }) {
  return (
    <div className="w-1/5 bg-gray-100 p-2 rounded">
      <h2 className="mb-3">{title}</h2>
      <div className="w-full">
        <span className="hover:bg-gray-200 block p-1">
          + Ajouter une carte
        </span>
      </div>
    </div>
  );
}
