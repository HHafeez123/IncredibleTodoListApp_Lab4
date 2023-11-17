import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

interface ToDoFormProps {
  addTask: (task: string) => void;
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

function ToDoForm({ addTask }: ToDoFormProps) {
  const [taskText, setTaskText] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={() => addTask(taskText)} />
    </View>
  );
}

export default ToDoForm;
