import * as Style from "@/styles/components/common/select.style";
import Icon from "@/components/common/Icon";
import Options from "./Option";
import { useState } from "react";

interface Label {
  label: string;
  value: string;
}

interface SelectProps {
  optionObj: Label[];
  width?: string;
}

const Select = ({ optionObj, width }: SelectProps) => {
  // console.log(optionObj);
  // console.log(width);
  const [nowOption, setNowOption] = useState<string>(optionObj[0].value);

  const DEFAULT_WIDTH = 150;

  const [openDrop, setOpenDrop] = useState<boolean>(false);
  // console.log(openDrop);

  const toggleDrop = () => {
    setOpenDrop(!openDrop);
  };
  return (
    <Style.CustomSelect
      onClick={toggleDrop}
      width={width ? width : DEFAULT_WIDTH}
    >
      {nowOption}
      <Icon name="IconDownArrow" size={22} />
      {openDrop && (
        <Options optionObj={optionObj} setNowOption={setNowOption} />
      )}
    </Style.CustomSelect>
  );
};

export default Select;
