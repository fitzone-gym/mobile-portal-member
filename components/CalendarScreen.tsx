import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  const customTheme = {
    backgroundColor: '#f5f5f5',
    calendarBackground: '#222222',
    textSectionTitleColor: '#b6c1cd',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#222222',
    todayTextColor: '#00adf5',
    dayTextColor: '#2d4150',
    textDisabledColor: '#d9e1e8',
    dotColor: '#00adf5',
    selectedDotColor: '#ffffff',
    arrowColor: 'orange',
    monthTextColor: 'blue',
    textDayFontFamily: 'monospace',
    textMonthFontFamily: 'monospace',
    textDayHeaderFontFamily: 'monospace',
    textDayFontWeight: '400', // Use one of the allowed values: "bold", "normal", "100", ...
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: 'bold',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16,
    
  };
  
  







  return (
    <View style={styles.container}>
      <Calendar Theme={customTheme}
        onDayPress={(day) => handleDateSelect(day.dateString)}
        markedDates={{
          [selectedDate]: { selected: true, marked: true, selectedColor: '#E54646' },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    height: '100%',
    marginTop:17,
    
    
  },


});

export default CalendarScreen;
