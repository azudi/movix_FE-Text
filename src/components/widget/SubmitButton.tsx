import React from "react";
import { Bars } from "react-loader-spinner";

interface Props {
  title: string;
  isLoading: boolean | undefined;
}

const SubmitButton: React.FC<Props> = (props: Props) => {
  const { title, isLoading } = props;

  return (
    <button
      className={`bg-black flex justify-center items-center text-white w-full rounded-lg mt-4 py-3 san-serif
         ${
           isLoading
             ? "opacity-50 cursor-not-allowed"
             : "opacity-100 cursor-pointer"
         }
         `}
      disabled={isLoading}
    >
      {title}
      {  isLoading ? <Bars
        height="20"
        width="20"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass="ml-2"
        visible={true}
      /> : null }
    </button>
  );
};

export default SubmitButton;
