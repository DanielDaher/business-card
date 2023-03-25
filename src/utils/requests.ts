import axios from "axios";
import { GetPositionList } from "./types";

export const getPositionList = async () => {
  const { data }:GetPositionList = await axios.get("https://api.github.com/repos/tannerlinsley/react-query")
  return data;
}