import Explore from "./components/explore";
import ToDo from "./components/Todo";
import Fruits from "./components/Fruits";
import Singers from "./components/Singers";
function App() {
  const fruits = ["Mango", "Jack fruit", "Pinapple", "Banana"];
  const singers = [
    { id: 1, name: "Arijit Singh", age: 32 },
    { id: 2, name: "Shreya Ghosal", age: 28 },
    { id: 3, name: "Kumar Shanu", age: 58 },
    { id: 4, name: "Atif Aslam", age: 45 },
  ];
  return (
    <>
    {
      singers.map(singersss=><Singers id={singersss.id} name={singersss.name} age={singersss.age}></Singers>
  )}
    
      {fruits.map((fruit) => (
        <Fruits fruit={fruit}></Fruits>
      ))}
      <Explore />
      <ToDo task="Learn React" isDone={true}></ToDo>
      <ToDo task="Revise js" isDone={false}></ToDo>
      <ToDo task="Go to market" isDone={true}></ToDo>
      <h2 className="text-center text-2xl font-bold p-5">Information form</h2>
      <Student name="Prodip" dist="Tangail"></Student>
      <Student name="Roman" dist="Mymensingh"></Student>
      <Student name="Momen" dist="Ghatail"></Student>
      <Student name="Abc" dist="Dhaka"></Student>
      <Student name="CDEF" dist="Khulna"></Student>
      <h2 className="text-center text-2xl font-bold p-5">Player Information</h2>
      <Player name="Rohit" runs="1250"></Player>
      <Player name="Kohli" runs="1130"></Player>
    </>
  );
}
function Student(person) {
  console.log(person);
  return (
    <div className="justify-center  p-5 space-y-2 m-5 rounded-lg w-50 mx-auto bg-gray-300">
      <h3>Name:{person.name}</h3>
      <h3>Dist:{person.dist}</h3>
    </div>
  );
}

function Player({ name, runs }) {
  return (
    <div className="justify-center  p-5 space-y-2 m-5 rounded-lg w-50 mx-auto bg-gray-300">
      <h3>Name:{name}</h3>
      <h3>Runs:{runs}</h3>
    </div>
  );
}

export default App;
