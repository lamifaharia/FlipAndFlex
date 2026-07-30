const ProgressBar = ({ matched = 0, total = 100 }) => {
  const progress = (matched / total) * 100;

  return (
    <progress
      className="progress progress-primary w-full mt-6"
      value={progress}
      max="100"
    />
  );
};

export default ProgressBar;