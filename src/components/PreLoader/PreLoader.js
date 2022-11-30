import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GridLoader } from "react-spinners";
import { setLoading } from "../../slice";

function PreLoader() {
  const loading = useSelector((state) => state.main.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("loading", loading);
    // dispatch(setLoading(true));
  }, []);

  return (
    <>
      {loading && (
        <div className="sweet-loading">
          <GridLoader size={15} loading={loading} color="#36d7b7" />
        </div>
      )}
    </>
  );
}

export default PreLoader;
