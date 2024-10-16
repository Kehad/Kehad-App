import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const MultipleDropdowns = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);

  const [items1, setItems1] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
  ]);

  const [items2, setItems2] = useState([
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ]);

  const [items3, setItems3] = useState([
    { label: "Small", value: "small" },
    { label: "Medium", value: "medium" },
    { label: "Large", value: "large" },
  ]);

  const onOpen1 = () => {
    setOpen2(false);
    setOpen3(false);
  };

  const onOpen2 = () => {
    setOpen1(false);
    setOpen3(false);
  };

  const onOpen3 = () => {
    setOpen1(false);
    setOpen2(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Multiple Dropdowns Example</Text>

      <View style={styles.dropdownContainer}>
        <DropDownPicker
          open={open1}
          value={value1}
          items={items1}
          setOpen={setOpen1}
          setValue={setValue1}
          setItems={setItems1}
          onOpen={onOpen1}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownList}
          zIndex={3000}
          zIndexInverse={1000}
        />
      </View>

      <View style={styles.dropdownContainer}>
        <DropDownPicker
          open={open2}
          value={value2}
          items={items2}
          setOpen={setOpen2}
          setValue={setValue2}
          setItems={setItems2}
          onOpen={onOpen2}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownList}
          zIndex={2000}
          zIndexInverse={2000}
        />
      </View>

      <View style={styles.dropdownContainer}>
        <DropDownPicker
          open={open3}
          value={value3}
          items={items3}
          setOpen={setOpen3}
          setValue={setValue3}
          setItems={setItems3}
          onOpen={onOpen3}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownList}
          zIndex={1000}
          zIndexInverse={3000}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  dropdownContainer: {
    marginBottom: 20, // Ensures enough space between the dropdowns
  },
  dropdown: {
    backgroundColor: "#fafafa",
  },
  dropdownList: {
    backgroundColor: "#fafafa",
  },
});

// const App = () => {
//   return (
//     <View style={{ flex: 1 }}>
//       <MultipleDropdowns />
//     </View>
//   );
// };

// export default App;
