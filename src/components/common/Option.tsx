import * as Style from "@/styles/components/common/option.style";

interface Label {
  label: string;
  value: string;
}

interface OptionProps {
  optionObj: Label[];
  setNowOption: React.Dispatch<React.SetStateAction<string>>;
}

export default function Options({ optionObj, setNowOption }: OptionProps) {
  const clickValue = (e: React.MouseEvent<HTMLDivElement>) => {
    // console.log("e ::", e.currentTarget.innerText);
    setNowOption(e.currentTarget.innerText);
  };

  return (
    <Style.Option>
      {optionObj.map((option) => (
        <div
          className="option__item"
          id={option.label}
          key={option.value}
          onClick={clickValue}
        >
          {option.value}
        </div>
      ))}
    </Style.Option>
  );
}
