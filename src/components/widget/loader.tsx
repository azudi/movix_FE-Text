import React from "react";
import { Dna } from "react-loader-spinner";

interface Props {
  width: number;
}

function Loader(props: Props) {
  const { width } = props;

  return (
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
}

export default Loader;
