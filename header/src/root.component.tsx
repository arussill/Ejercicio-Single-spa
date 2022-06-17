import { useEffect } from "react";
import { getAllProducts } from "./actions/getAllProducts";
import { useAppDispatch } from "./app/store";
import Inventory from "./pages/Inventory";

export default function Root(props) {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch])

  return (
    <div>
      <Inventory />
    </div>
  )
}
