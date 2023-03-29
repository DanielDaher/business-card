import '../Styles/Loading.css';

function Loading() {
  const blades = [...Array(12).keys()];
  return (
    <div className="spinner center" data-testid="spinner-center">
      {blades.map((blade) => <div key={blade} className="spinner-blade" data-testid="spinner-blade"></div>)}
    </div>
  )
};
export default Loading;