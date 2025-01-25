import { Text } from "components/atoms";
import { ErrorMessageWrapper } from "./styled";

interface IErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: IErrorMessageProps) =>
  <ErrorMessageWrapper>
    <Text variant="explan_regular">
      {message}
    </Text>
  </ErrorMessageWrapper>;
