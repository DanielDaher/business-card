import {
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";


export const useGetPositionList = () => {
  const { data, isError, isLoading, isSuccess, isFetching } = useQuery({
    queryKey: ["repoData"], //nome da query pra achar no devtools e invalidar, se necessário
    queryFn: () =>
      axios
        .get("https://api.github.com/repos/tannerlinsley/react-query")
        .then((res) => res.data),
  });
  return { data, isError, isLoading, isSuccess, isFetching }
}