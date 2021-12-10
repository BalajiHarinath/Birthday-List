import Display from "./display";
const List = ({ input }) => {
  return (
    <div className="list-container">
      {input.map((person) => (
        <Display
          key={person.id}
          name={person.name}
          age={person.age}
          image={person.image}
        />
      ))}
    </div>
  );
};
export default List;
