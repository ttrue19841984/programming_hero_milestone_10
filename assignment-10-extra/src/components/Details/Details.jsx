
import { useLoaderData, useParams } from "react-router-dom";
import Detail from "../Detail/Detail";
import { useEffect, useState} from "react";


const Details = () => {
  const [detail, setDetail] = useState({})
    const {id} = useParams();
    const details = useLoaderData();
    console.log(id, details)
    useEffect(() => {
      const findDetails = details?.find((detail) => detail._id === id);
      setDetail(findDetails)
    },[id, details])
    

  return (
    <div className="max-w-xl mx-auto">
        <Detail detail={detail}></Detail>
    </div>

   
  )
}

export default Details
