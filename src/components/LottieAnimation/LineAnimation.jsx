import Lottie from "react-lottie";

import LineAnimationJson from "../../assets/line.json";

export const LineAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LineAnimationJson,
  };
  return <Lottie options={defaultOptions} width={600} height={300} />;
};
