import React, { Suspense } from "react";
//import ReactSelect from "react-select";
import { SelectWrapper } from "./styled";
import type { ISelectOption } from "types";

// eslint-disable-next-line @rushstack/typedef-var
const ReactSelect = React.lazy(() =>
  import("react-select").then((module) => ({ default: module.default }))
);
interface ISelectProps {
  /** Select의 id */
  id?: string;
  /** Select의 name */
  name?: string;
  /** 현재 선택되어있는 값 */
  value: ISelectOption | undefined;
  /** 값 변경 시 함수 */
  onChange: (value: ISelectOption | undefined) => void;
  /** Select options */
  options: ISelectOption[];
  /** placeholder */
  placeholder?: string;
}

export const Select = ({
  id,
  name,
  value,
  onChange,
  options,
  placeholder = "선택해주세요",
}: ISelectProps) => {
  return (
    <SelectWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <ReactSelect
          id={id}
          name={name}
          classNamePrefix="rs"
          placeholder={placeholder}
          value={value}
          onChange={(selected) =>
            onChange((selected as ISelectOption) || undefined)
          }
          options={options}
          // 검색 옵션 제거
          isSearchable={false}
        />
      </Suspense>
    </SelectWrapper>
  );
};
