import { useState } from "react";
import { Pressable, View, Modal } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import RNDateTimePicker from "@react-native-community/datetimepicker";
function DateRangePicker({fromDate, toDate, updateFromDate, updateToDate}) {
  const [open, setOpen] = useState(false);
  const [whichDate, setWhichDate] = useState(true);
  function handlePress(){
    console.log(fromDate);
    console.log(toDate);
    setOpen(true);
  }
  function hideDatePicker(){
    console.log('hide');
    setOpen(false);
  }
  return (
    <View>
      <Pressable>
        <MaterialIcons name="date-range" size={24} color="black" onPress={handlePress} />
      </Pressable>
      <Modal visible={open} transparent onRequestClose={hideDatePicker} onDismiss={hideDatePicker}>
      <RNDateTimePicker onTouchCancel={hideDatePicker}  mode="date" value={fromDate} />
      </Modal>
    </View>
  );
}

export default DateRangePicker;
