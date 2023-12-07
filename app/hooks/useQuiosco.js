import { useContext } from "react";

import QuioscoContext from "@/app/context/QuioscoProvider";

const useQuiosco = () => {
  return useContext(QuioscoContext);
}

export default useQuiosco;
