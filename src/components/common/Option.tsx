import { useStores } from "@/modules/Context";
import * as Style from "@/styles/components/common/option.style";
import { observer } from "mobx-react";

interface Label {
  label: string;
  value: string;
}

interface OptionProps {
  optionObj: Label[];
  setNowOption: React.Dispatch<React.SetStateAction<string>>;
  name: string;
}

const Options = observer(({ optionObj, setNowOption, name }: OptionProps) => {
  const { newsStore } = useStores();
  // console.log("name ::", name);
  const clickValue = (e: React.MouseEvent<HTMLDivElement>) => {
    // console.log(e);
    setNowOption(e.currentTarget.innerText);
    if (name === "filter") {
      newsStore.setSortBy(e.currentTarget.innerText);
      newsStore.setPage(1);
    }
    if (name === "search") {
      const searchIn = e.currentTarget.id;
      newsStore.setSearchIn(searchIn);
    }
  };

  return (
    <Style.Option>
      {optionObj.map((option) => (
        <div
          className="option__item"
          id={option.value}
          key={option.value}
          onClick={clickValue}
        >
          {option.label}
        </div>
      ))}
    </Style.Option>
  );
});

export default Options;
