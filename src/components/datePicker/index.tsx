import React, {useState} from 'react';
import moment from "moment";
import {  DateRangePicker } from 'react-dates';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import {
  CalenderCtn, DatePickerCtn
} from "./index.style";
import FilterRadio from "../filterRadio";

interface DatePickerProps {
  dates: {
    startDate: any,
    endDate: any,
  },
  handleDateChange: (newDate: {startDate: any, endDate: any}) => {},
}

const DatePicker:React.FC<DatePickerProps> = ({dates, handleDateChange}) => {
  const [ calenderFocusInput, setCalenderFocusInput ] = useState(null);
  const [ showCalender, setShowCalender ] = useState(false);

  return (
    <DatePickerCtn>
      <FilterRadio text='From...to...' onClick={() => setShowCalender(!showCalender)} active={showCalender}/>
      <CalenderCtn show={showCalender}>
        <DateRangePicker
          startDate={dates != undefined &&Object.keys(dates).length? dates.startDate: moment().subtract(1,'year')}
          startDateId='startDate'
          endDate={dates != undefined && Object.keys(dates).length? dates.endDate: moment()}
          startDateId='startDate'
          onDatesChange={({startDate, endDate}) => {
            handleDateChange({startDate,endDate})
          }}
          displayFormat='DD/MM/YYYY'
          isOutsideRange={() => false}
          focusedInput={calenderFocusInput}
          onFocusChange={focusedInput => setCalenderFocusInput(focusedInput)}
          numberOfMonths={1}
        />
      </CalenderCtn>
    </DatePickerCtn>
  )
};

export default DatePicker;