import { CSSProperties, ComponentProps, ReactNode } from "react";
import * as Style from "@/styles/components/common/input.style";

interface InputProps extends Omit<ComponentProps<"input">, "style"> {
  placeholder?: string;
  rightSlot?: ReactNode;
  width?: string | number;
  style?: CSSProperties;
}

const Input = ({
  placeholder,
  rightSlot,
  width,
  style,
  ...rest
}: InputProps) => {
  const DEFAULT_WIDTH = 400;
  return (
    <Style.InputWrapper className="input-wrapper" style={style}>
      <Style.Input
        placeholder={placeholder}
        {...rest}
        autoComplete="off"
        width={width ? width : DEFAULT_WIDTH}
      />
      {rightSlot}
    </Style.InputWrapper>
  );
};

export default Input;
