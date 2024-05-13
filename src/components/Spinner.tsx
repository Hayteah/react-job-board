import { ClipLoader } from "react-spinners";

const Spinner = ({ loading }: any) => {
  const override = {
    display: "block",
    margin: "100px, auto",
  };

  return (
    <ClipLoader
      color="#ffffff"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
