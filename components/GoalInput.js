import { useState } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandeler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandeler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/image/goal.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your Cource Goal"
          onChangeText={goalInputHandeler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandeler} color={'#5e0acc'}/>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color={'#f31282'} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor:"#311b6b"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:"#e4d0ff",
    width: "100%",
    padding: 16,
    marginRight: 8,
    color:'#120438',
    borderRadius:6
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginTop: 16,
    marginHorizontal: 8,
  },
  image:{
    width:100,
    height:100,
    margin:20
  }
});
