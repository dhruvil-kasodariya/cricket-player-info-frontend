import { useEffect, useState } from "react";
import MySelect from "../select/select.componet";
import { useDispatch } from "react-redux";
import { setPlayerFilterOption } from "../../store/players/players.action";
const filertOption = [
  { value: "Batsman", label: "BATSMAN" },
  { value: "Wicket Keeper", label: "WICKET KEEPER" },
  { value: "All-rounder", label: "ALL ROUNDER" },
  { value: "Bowler", label: "BOWLER" },
];

const FilterPlayerSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (option) => {
    setSelectedOption(option);
  };
  useEffect(() => {
    dispatch(setPlayerFilterOption(selectedOption));
  }, [selectedOption, dispatch]);
  return (
    <MySelect
      handleChange={handleChange}
      selectedOption={selectedOption}
      options={filertOption}
      placeholder="Select Player Role"
    />
  );
};
export default FilterPlayerSelect;
