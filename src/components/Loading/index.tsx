import Lottie from 'react-lottie';

const loadingOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export function Loading() {
  return (
    <div>
      <Lottie
        options={loadingOptions}
        width={300}
        height={300}
        isStopped={false}
        isPaused={false}
      />
    </div>
  );
}
