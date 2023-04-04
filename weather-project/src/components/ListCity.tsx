function ListCity() {
  let list: string[] = ["Paris", "Prague", "London"];
  return (
    <ul className="list-group">
      {list.map((item) => (
        <li className="item"> {item}</li>
      ))}
    </ul>
  );
}

export default ListCity;
