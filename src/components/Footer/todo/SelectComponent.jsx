import React from 'react'
import Select from "react-select";

function SelectComponent({onSelectHandle}) {
    const options = [
        { value: "date", label: "Date", color: "#fff" },
        { value: "name", label: "Name", color: "#fff" },
      ];
    
      const colorStyles = {
        control: (styles, state) => ({
          ...styles,
          backgroundColor: "grey",
          color: "ffffff",
          height: '10px',
          width: '100px',
          // fontSize: '14px',
          cursor: 'pointer'
        }),
        option: (styles, state) => {
          return { ...styles, color: state.data.color, backgroundColor: "grey",};
        },
      };

      
    
  return (
    <Select
      defaultValue={options[0]}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: "transparent",
            primary: "grey",
            neutral0: "white",
          },
        })}
        options={options}
        styles={colorStyles}
        onChange={(e) => onSelectHandle(e)}//fix
      />
  )
}

export default SelectComponent