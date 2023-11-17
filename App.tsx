import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme
} from 'react-native';
import ToDoForm from './ToDoForm';

interface AppProps {}

function App({}: AppProps) {
  const isDarkMode = useColorScheme() === 'dark';

  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (taskText: string) => {
    setTasks([...tasks, taskText]);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <ToDoForm addTask={addTask} />
        {tasks.map((task, index) => (
          <Text key={index}>{task}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
