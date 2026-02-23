import { datePickerStyles } from "@/constants/stylesheets/components/shared/date-picker-styles";
import React, { Dispatch, SetStateAction, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Modal from "react-native-modal";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface DatePickerProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>
  buttonText: string;
  selectedDate: Date | undefined;
  setSelectedDate: Dispatch<SetStateAction<Date | undefined>>;
  onClose: () => void;
  onSelect: (date: Date) => void;
}

export default function DatePicker({
  visible,
  setVisible,
  buttonText,
  selectedDate,
  setSelectedDate,
  onClose,
  onSelect,
}: DatePickerProps) {
  const styles = datePickerStyles();

  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const changeMonth = (direction: number) => {
    setCurrentDate(new Date(year, month + direction, 1));
  };

  const handleSelect = (day: number) => {
    const pickedDate = new Date(year, month, day);
    setSelectedDate(pickedDate);
    onSelect(pickedDate);
    onClose();
  };

  const renderDays = () => {
    const blanks = Array(firstDayOfMonth).fill(null);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return [...blanks, ...days].map((day, index) => {
      if (!day) {
        return <View key={index} style={styles.dayCell} />;
      }

      const isSelected =
        selectedDate &&
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === month &&
        selectedDate.getFullYear() === year;

      return (
        <Pressable
          key={index}
          style={[styles.dayCell, isSelected && styles.selectedDay]}
          onPress={() => handleSelect(day)}
        >
          <Text style={[styles.dayText, isSelected && styles.selectedText]}>{day}</Text>
        </Pressable>
      );
    });
  };

  return (
    <>
      <Pressable onPress={() => setVisible(true)}>
        <Text style={styles.openButtonText}>{buttonText}</Text>
      </Pressable>
      <Modal isVisible={visible} animationIn="fadeIn" animationOut="fadeOut" hasBackdrop={true} onBackdropPress={() => setVisible(false)}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
              <Pressable onPress={() => changeMonth(-1)}>
                <Text>{"<"}</Text>
              </Pressable>

              <Text style={styles.monthText}>
                {currentDate.toLocaleString("default", {
                  month: "long",
                })}{" "}
                {year}
              </Text>

              <Pressable onPress={() => changeMonth(1)}>
                <Text>{">"}</Text>
              </Pressable>
            </View>

            {/* Days of week */}
            <View style={styles.weekRow}>
              {daysOfWeek.map((day) => (
                <Text key={day} style={styles.weekDay}>
                  {day}
                </Text>
              ))}
            </View>

            {/* Calendar grid */}
            <View style={styles.grid}>{renderDays()}</View>

            <Pressable onPress={onClose}>
              <Text style={styles.closeText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}
