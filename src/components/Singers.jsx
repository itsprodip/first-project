export default function Singers({id,name,age}){
    return (
      <div className="p-2 font-bold">
        <h2>
          {id}.{name} <span className="text-gray-500">age:{age}</span>
        </h2>
      </div>
    );
}