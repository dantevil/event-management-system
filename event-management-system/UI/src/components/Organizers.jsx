const Organizers = ({ organizers }) => {
  return (
    <ul className="list-disc pl-5">
      {organizers.map(ele => (
        <li key={ele._id}>
          <strong>{ele.name}</strong> — {ele.email}
        </li>
      ))}
    </ul>
  );
}

export default Organizers;