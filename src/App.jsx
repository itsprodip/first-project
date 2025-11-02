function App() {

  return (
    <>
    <h2 className="text-center text-2xl font-bold p-5">Information form</h2>
    <Student name="Prodip" dist="Tangail"></Student>
    <Student name="Roman" dist="Mymensingh"></Student>
    <Student name="Momen" dist="Ghatail"></Student>
    </>
  )
}
function Student(person){
  console.log(person);
  return (
    <div className="justify-center  p-5 space-y-2 m-5 rounded-lg w-50 mx-auto bg-gray-300">
      <h3>Name:{person.name}</h3>
      <h3>Dist:{person.dist}</h3>
    </div>
    
  )
}


export default App