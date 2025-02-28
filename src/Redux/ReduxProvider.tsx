import { Provider } from "react-redux";
import { store } from "./store";
import { ChildrenProp } from "../ReactQuery/QueryProvider";

const ReduxProvider = ({ children }: ChildrenProp) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
