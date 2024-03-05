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
  // width,
  style,
  ...rest
}: InputProps) => {
  // const DEFAULT_WIDTH = 400;

  const getScreenWidth = () => {
    return window.innerWidth;
  };

  const getDeviceWidth = () => {
    const screenWidth = getScreenWidth();
    if (screenWidth >= 1024) {
      return 400;
    } else if (screenWidth >= 768) {
      return 200; // 태블릿
    } else {
      return 100; // 모바일
    }
  };

  return (
    <Style.InputWrapper className="input-wrapper" style={style}>
      <Style.Input
        placeholder={placeholder}
        {...rest}
        autoComplete="off"
        width={getDeviceWidth()}
      />
      {rightSlot}
    </Style.InputWrapper>
  );
};

export default Input;
