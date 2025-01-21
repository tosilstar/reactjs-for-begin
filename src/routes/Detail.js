import { useParams } from "react-router-dom";

function Detail(){

  const {id} = useParams();
  
  console.log(id);
  return (
    <div>
      <h2>Detail</h2>
    </div>
  );
}

export default Detail;
