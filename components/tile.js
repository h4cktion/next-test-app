function Tile({ task }) {
  const { title, owners } = task;
  return (
    <div className="bg-gray-50 p-2 rounded my-2">
      {/* <input type='textarea' value={title} className='bg-gray-50 rounded w-full'/> */}
      {title}
      <div className="flex justify-end">
        {owners.map((owner) => (
          <div
            key={owner.id}
            className="rounded-full bg-blue-400 h-8 w-8 flex items-center justify-center text-bold text-xs"
          >{`${owner.name.charAt(0)}${owner.firstName.charAt(0)}`}</div>
        ))}
      </div>
    </div>
  );
}

export default Tile;
