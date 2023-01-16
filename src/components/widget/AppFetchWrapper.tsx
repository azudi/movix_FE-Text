import { bool } from "prop-types";
import React, { ReactNode } from "react";
import Loader from "./loader";
import { TbFaceIdError } from "react-icons/tb"

interface Props {
  children: ReactNode;
  isLoading: boolean;
  isError: boolean;
  refresh: Function
}

const AppFetchingWrapper: React.FC<Props> = (props: Props) => {
  const { isLoading, isError, children, refresh } = props;

  return (
    <div className="w-full">
      {
      isLoading && !isError ? (
        <div className="min-h-[100vh] flex justify-center items-center">
          <Loader width={30} />
        </div>
      ) : null}



      {
        isError ? (
          <div className="min-h-[100vh] flex justify-center items-center">
            <p className="md:w-6/12 sm:w-11/12 lg:w-5/12 text-center">
                <p className="flex justify-center"><TbFaceIdError size={50}/></p>
                <span className="w-full block mt-5">Oop an error occured, unable to fetch movies</span>
                <button
                onClick={()=>refresh()}
                className=" border-2 border-black px-8 py-1 rounded-[50px] my-4">Retry</button>
            </p>
          </div>
        ) : null
      }


      {!isLoading && !isError ? <>{children}</> : null}
    </div>
  );
};

export default AppFetchingWrapper;
