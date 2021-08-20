import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, ScrollView, Keyboard } from 'react-native'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import DT from './darkTheme'
import myDarkTheme from './darkTheme'
import Task from './components/Task'

//Create task view and pass props from app
//create add-task view and once added, have them show up in the task view
//create state in app to hold arrray of tasks
//create a method in app that adds task to the array
//create a method in app to remove tasks once pressed



function HomeScreen() {

  const [task, setTask] = useState()

  const [taskArray, setTaskArray] = useState([])

  const addTask = () => {
    setTaskArray([...taskArray, task])
    setTask(null)
    Keyboard.dismiss()
  }

  const removeTask = (index) => {
    let taskArrayCopy = [...taskArray]
    taskArrayCopy.splice(index, 1)
    setTaskArray(taskArrayCopy)
  }


  return (
    <>
      <View style={styles.container}>
        {/*<View style={styles.taskWrapper}>
          <Text style={styles.title}>Today's Tasks</Text>
        </View>*/}
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1
          }}
          keyboardShouldPersistTaps='handled'
        >
          <View>
            {
              taskArray.map((item, index) => {
                return(
                  <TouchableOpacity key={index} onPress={() => removeTask(index)}>
                  <Task text={item} />
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.inputContainer}
          keyboardVerticalOffset={100}
        >
          <TextInput 
            style={styles.input}
            placeholder="Hello"
            onChangeText={text => setTask(text)}
            value={task}
          />
          <TouchableOpacity onPress={() => addTask()}>
            <View style={styles.plusContainer}>
            <Text style={styles.plus}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView> 
      </View> 
    </>
  )
}

const HomeStack = createStackNavigator()

function HomeScrenStack({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Today's Tasks" component={HomeScreen}></HomeStack.Screen>
    </HomeStack.Navigator>
  )
}

function App() {
  const scheme = useColorScheme()
  const MyDarkTheme = DT()

  return (
    <NavigationContainer theme={scheme === 'dark' ? MyDarkTheme : DefaultTheme}>
      <HomeScrenStack />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    width: 250,
    borderRadius: 10,
    borderWidth: 1,
    textAlign: 'center'

  },
  inputContainer: {
  flex: 1,
  position: 'absolute',
  bottom: 60,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '100%',
  paddingHorizontal: 20,
  paddingTop: 20,
  backgroundColor: '#E8EAED'

  },
  plus: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFF'
  },
  plusContainer: {
    height: 50,
    width: 50,
    backgroundColor: '#65B0C6',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',

  }
})

export default App
