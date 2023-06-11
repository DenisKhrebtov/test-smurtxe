import { MutatingDots } from "react-loader-spinner";

const Spinner = () => (
  <MutatingDots
    height="150"
    width="150"
    color="#d4a373"
    secondaryColor="#d4a373"
    radius="15.5"
    ariaLabel="mutating-dots-loading"
    wrapperStyle={{ justifyContent: "center", marginTop: "60px" }}
    visible={true}
  />
);

export default Spinner;
