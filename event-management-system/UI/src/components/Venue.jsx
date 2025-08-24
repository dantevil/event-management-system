const Venue = ({ venues }) => {
  return (
    <ul className="list-disc pl-5">
      {venues.map(ele => (
        <li key={ele._id}>
          <strong>{ele.name}</strong> — {ele.location} (Capacity: {ele.capacity})
        </li>
      ))}
    </ul>
  );
}

export default Venue;