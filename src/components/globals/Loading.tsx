export const Loading = ({ show }: { show: boolean }) => {
  if (!show) return <></>;

  return (
    <div className="loading">
      <span className="loading__bubble"></span>
      <span className="loading__bubble"></span>
      <span className="loading__bubble"></span>
    </div>
  );
};
