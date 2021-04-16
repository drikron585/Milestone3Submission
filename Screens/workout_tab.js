import React from 'react';
import { StyleSheet,ScrollView, Alert, Text, Image , SafeAreaView} from 'react-native';
import { Button } from 'react-native-elements';
import { Dimensions } from 'react-native';
import XBar from 'react-native-x-bar';

const jsondata = require('./data.json');

const windowWidth = Dimensions.get('window').width;
const currentDate = new Date().toDateString();

const List = {
    workoutName: 'temp1',
    excName1 : 'temp',
    excWeight1 : 420,
    excSet1 : 69, 
    excRep1 : 42069,
    excName2 : 'temp',
    excWeight2 : 420,
    excSet2 : 69, 
    excRep2 : 42069,
    excName3 : 'temp',
    excWeight3 : 420,
    excSet3 : 69, 
    excRep3 : 42069
};
let temp = "choose";
export default function Workout({ navigation }){
    if(navigation.getParam('name') != undefined){
        temp = navigation.getParam('name');
    }
    else{
        temp = "choose";
    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.dateBar}>
                {"\n\n"}
                {currentDate}
                {"\n"}
            </Text>
            <Text style={styles.titleBar}>
                <Text>Workout</Text>
                {"\n"}
            </Text>
            
            <ScrollView style={styles.scrollView}>
                <Button style={styles.choose_button}
                    title={temp}
                    type="outline"
                    onPress = {() => navigation.navigate('workout_choose')} 
                />
                <Button style={styles.start_button}
                    title="start"
                    onPress = {
                        () =>{
                            if(temp == "choose"){
                                Alert.alert("Please select a workout");
                            }
                            else{
                                List.workoutName = navigation.getParam('name'),
                                List.excName1 = navigation.getParam('excercise1').excName,
                                List.excWeight1 = navigation.getParam('excercise1').excWeight,
                                List.excRep1 = navigation.getParam('excercise1').excRep,
                                List.excSet1 = navigation.getParam('excercise1').excSet,
                                List.excName2 = navigation.getParam('excercise2').excName,
                                List.excWeight2 = navigation.getParam('excercise2').excWeight,
                                List.excRep2 = navigation.getParam('excercise2').excRep,
                                List.excSet2 = navigation.getParam('excercise2').excSet,
                                List.excName3 = navigation.getParam('excercise3').excName,
                                List.excWeight3 = navigation.getParam('excercise3').excWeight,
                                List.excRep3 = navigation.getParam('excercise3').excRep,
                                List.excSet3 = navigation.getParam('excercise3').excSet,
                                navigation.navigate('workout_start1',List);
                            }
                        } 
                        // () => navigation.navigate('workout_start1',List)
                    }
                    //onPress = {() => navigation.navigate('workout_start1')} 
                />
            </ScrollView>

            <XBar style={styles.toolbar}
                slots={[
                    { 
                        children : <Image style={styles.toolbar_discover} source={require("./assets/discover.jpg")}/>,
                        onPress : () => {navigation.navigate('home_tab');}
                    },
                    { 
                        children : <Image style={styles.toolbar_workout} source={require("./assets/C_workout.jpg")}/>,
                        onPress : () => {navigation.navigate('workout_tab');}
                    },
                    {
                        children : <Image style={styles.toolbar_graph} source={require("./assets/graph.jpg")}/>,
                        onPress : () => {navigation.navigate('analytics_selection_tab');}
                    },
                    { 
                        children : <Image style={styles.toolbar_setting} source={require("./assets/setting.jpg")}/>,
                        onPress : () => {navigation.navigate('settings_tab');}
                    }
                ]}
                activeOpacity={ .5 }
                style={{
                    height : 90,
                    borderColor : '#ddd',
                }}
            />
        </SafeAreaView>
    )
}
  


const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        fontSize:35,
        backgroundColor: '#FAE8B4'
    },
    scrollView: {
        padding: 24,
        flex: 1,
        fontSize:35,
        backgroundColor: '#F7DDE3'
    },
    dateBar: {
        fontSize: 15,
        marginHorizontal:20
    },
    titleBar: {
        fontSize: 30,
        marginHorizontal:20
    },


    choose_button: {
        fontSize: 30,
        marginHorizontal: windowWidth/5,
        marginVertical: 70,
        width : windowWidth/2,
        height : 40,
        backgroundColor: "#FFFFFF"
    },
    start_button: {
        fontSize: 30,
        marginHorizontal: windowWidth/5,
        width : windowWidth/2,
        height : 80 
    },


    toolbar: {
        width : windowWidth/4,
        height : 80 
    },
    toolbar_discover: {
        width : windowWidth/4,
        height : 70,
    },
    toolbar_workout: {
        width : windowWidth/4,
        height : 70,
    },
    toolbar_graph: {
        width : windowWidth/4-10,
        marginHorizontal:5,
        height : 80,
    },
    toolbar_setting: {
        width : windowWidth/4-10,
        marginHorizontal:5,
        height : 80,
    }
})