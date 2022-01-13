import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const location = useLocation();
  const url = location.pathname;

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [url]);

  return null;
};

export default ScrollTop;
