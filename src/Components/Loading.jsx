import '../Styles/Loading.css';

function Loading() {
  const blades = [...Array(12).keys()];
  return (
    <div className="spinner center">
      {blades.map((blade) => <div className="spinner-blade"></div>)}
    </div>
  )
};
export default Loading;