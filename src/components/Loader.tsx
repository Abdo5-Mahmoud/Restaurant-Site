import { PulseLoader } from "react-loadly";
import "react-loadly/styles.css";
export default function Loader() {
  return (
    <PulseLoader
      fullscreen={true}
      screenHeight={"100%"}
      loaderCenter={true}
      color="#ff6b6b"
      size={100}
      screenBackground="#eaf0ff"
      //   secondaryColor="#eaf0ff"
    />
  );
}
