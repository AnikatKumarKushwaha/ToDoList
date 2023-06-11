import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courceGoal, setCourceGoal] = useState([]);
  const [modelIsVisible, setModelIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModelIsVisible(true);
  }
  function endAddGoalHandler() {
    setModelIsVisible(false);
  }

  const addGoalHandeler = (enteredGoalText) => {
    setCourceGoal((currentCourceGoal) => [
      ...currentCourceGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandeler = (id) => {
    setCourceGoal((currentCourceGoal) => {
      return currentCourceGoal.filter((goal) => goal.id !== id);
    });
  };
  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        visible={modelIsVisible}
        onAddGoal={addGoalHandeler}
        onCancel={endAddGoalHandler}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courceGoal}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandeler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
    backgroundColor:'#1e085a'
  },

  goalsContainer: {
    flex: 5,
  },
});
