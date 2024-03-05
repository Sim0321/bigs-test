import * as Style from "@/styles/components/common/select.style";
import Icon from "@/components/common/Icon";
import Options from "./Option";
import { useState } from "react";
import { observer } from "mobx-react";

interface Label {
  label: string;
  value: string;
}

interface SelectProps {
  optionObj: Label[];
  width?: string;
  name: string;
}

const Select = observer(({ optionObj, width, name }: SelectProps) => {
  const [nowOption, setNowOption] = useState<string>(optionObj[0].label);

  const DEFAULT_WIDTH = 150;

  const [openDrop, setOpenDrop] = useState<boolean>(false);

  const toggleDrop = () => {
    setOpenDrop(!openDrop);
    // onChange(selectedOption);
  };
  return (
    <Style.CustomSelect
      onClick={toggleDrop}
      width={width ? width : DEFAULT_WIDTH}
    >
      {nowOption}
      <Icon name="IconDownArrow" size={22} />
      {openDrop && (
        <Options
          optionObj={optionObj}
          setNowOption={setNowOption}
          name={name}
        />
      )}
    </Style.CustomSelect>
  );
});

export default Select;
