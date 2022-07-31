import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useProtected = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      navigate("/");
    }
  }, [navigate]);
};
export default useProtected;
