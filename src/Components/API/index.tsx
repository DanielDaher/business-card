import { useGetPositionList } from "../../utils/queries";

export const API = () => {
  const { data, isLoading, isError, isFetching } = useGetPositionList();

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>An error has occurred: Something wrong has occured</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
}