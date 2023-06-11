import { StyleSheet, Text, View, Pressable } from "react-native";
const GoalItem = (props) => {
  return (
    <View style={styles.goalStyle}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed})=>pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};
export default GoalItem;

const styles = StyleSheet.create({
  goalStyle: {
    backgroundColor: "#5e0acc",

    margin: 8,
    borderRadius: 6,
  },
  pressedItem:{
    opacity:0.5
  },
  goalText: {
    textAlign: "center",
    color: "white",
    padding: 8, 
  },
});
