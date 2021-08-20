import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Task(props) {
    return (
        <View style={styles.item}> 
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{props.text}</Text>
                
            </View>
            <View style={styles.circleContainer}>
            <View style={styles.circle}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 15,
        paddingVertical: 25,
        marginHorizontal: 20,
        marginVertical: 5,
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
        



    },
    text: {
        fontSize: 17,
        paddingHorizontal: 10,
        flexWrap: 'wrap',
        
    },
    square: {
        height: 25,
        width: 25,
        backgroundColor: '#065BA0'
    },
    circle: {
        height: 15,
        width: 15,
        backgroundColor: '#065BA0',
        borderRadius: 5,
        

    }, itemLeft: {
        
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleContainer: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        flex: 1
    }
})

export default Task


//Create task view and pass props from app
//create add-task view and once added, have them show up in the task view
//create state in app to hold arrray of tasks
//create a method in app that adds task to the array
//create a method in app to remove tasks once pressed