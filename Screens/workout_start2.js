import { StyleSheet, ScrollView, View, Text, Image, TextInput, SafeAreaView} from 'react-native';
import { Dimensions, Alert } from 'react-native';
import XBar from 'react-native-x-bar';
import React from "react";
import {Button, CheckBox} from 'react-native-elements'

const jsondata = require('./analyticsData.json');


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



export default function workout_start2({ navigation }){

    return(
        <SafeAreaView style={styles.container}>
                <Text style={styles.dateBar}>
                    <Text>{navigation.getParam('workoutName')}      2/3</Text>
                    {"\n"}
                </Text>
                <Text style={styles.titleBar}>
                    <Text>{navigation.getParam('excName2')}</Text>
                    {"\n"}
                </Text>
            <ScrollView style={styles.scrollView}>
            <XBar style={styles.workoutBar}
                slots={[
                    { 
                        children : <Text style={styles.workoutText}>{"\n"}    {navigation.getParam('excWeight2')} (lb)</Text>,
                    },
                    { 
                        children : <Text style={styles.workoutText}>{"\n"}    {navigation.getParam('excRep2')} (reps)</Text>,
                    },
                    {
                        children : <Image style={styles.check_icon} source={require("./assets/check_mark.jpg")}/>,
                        onPress : () => {Alert.alert("Three sets left!");}
                    }
                ]}
                activeOpacity={ .5 }
                style={{
                    height : 90,
                    borderColor : '#ddd',
                }}
            />
            <XBar style={styles.workoutBar}
                slots={[
                    { 
                        children : <Text style={styles.workoutText}>{"\n"}    {navigation.getParam('excWeight2')} (lb)</Text>,
                    },
                    { 
                        children : <Text style={styles.workoutText}>{"\n"}    {navigation.getParam('excRep2')} (reps)</Text>,
                    },
                    {
                        children : <Image style={styles.check_icon} source={require("./assets/check_mark.jpg")}/>,
                        onPress : () => {Alert.alert("Two sets left!");}
                    }
                ]}
                activeOpacity={ .5 }
                style={{
                    height : 90,
                    borderColor : '#ddd',
                }}
            />
            <XBar style={styles.workoutBar}
                slots={[
                    { 
                        children : <Text style={styles.workoutText}>{"\n"}    {navigation.getParam('excWeight2')} (lb)</Text>,
                    },
                    { 
                        children : <Text style={styles.workoutText}>{"\n"}    {navigation.getParam('excRep2')} (reps)</Text>,
                    },
                    {
                        children : <Image style={styles.check_icon} source={require("./assets/check_mark.jpg")}/>,
                        onPress : () => {Alert.alert("One set left!");}
                    }
                ]}
                activeOpacity={ .5 }
                style={{
                    height : 90,
                    borderColor : '#ddd',
                }}
            />
            <XBar style={styles.workoutBar}
                slots={[
                    { 
                        children : <Text style={styles.workoutText}>{"\n"}    {navigation.getParam('excWeight2')} (lb)</Text>,
                    },
                    { 
                        children : <Text style={styles.workoutText}>{"\n"}    {navigation.getParam('excRep2')} (reps)</Text>,
                    },
                    {
                        children : <Image style={styles.check_icon} source={require("./assets/check_mark.jpg")}/>,
                        onPress : () => {Alert.alert("You're ready for the next exercise!");}
                    }
                ]}
                activeOpacity={ .5 }
                style={{
                    height : 90,
                    borderColor : '#ddd',
                }}
            />
            <View style={{marginTop: 20}}/>
            <Button style={styles.nextButton}
                    title="Next"
                    onPress = {
                        () =>{
                                List.workoutName = navigation.getParam('workoutName'),
                                List.excName1 = navigation.getParam('excName1'),
                                List.excWeight1 = navigation.getParam('excWeight1'),
                                List.excRep1 = navigation.getParam('excRep1'),
                                List.excSet1 = navigation.getParam('excSet1'),
                                List.excName2 = navigation.getParam('excName2'),
                                List.excWeight2 = navigation.getParam('excWeight2'),
                                List.excRep2 = navigation.getParam('excRep2'),
                                List.excSet2 = navigation.getParam('excSet2'),
                                List.excName3 = navigation.getParam('excName3'),
                                List.excWeight3 = navigation.getParam('excWeight3'),
                                List.excRep3 = navigation.getParam('excRep3'),
                                List.excSet3 = navigation.getParam('excSet3'),
                                navigation.navigate('workout_start3',List);
                            } 
                        // () => navigation.navigate('workout_start1',List)
                    }     
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
    dateBar: {
      fontSize: 25,
      marginHorizontal:20
    },
    titleBar: {
      fontSize: 20,
      marginHorizontal:20
    },
    scrollView: {
        padding: 24,
        flex: 1,
        fontSize:35,
        backgroundColor: '#F7DDE3'
    },
    typeText: {
        fontSize: 15,
        marginHorizontal:20
    },

    workoutBar:{
        width : windowWidth/4,
        height : 50,
        backgroundColor: "#FFFFFF" 
    },
    workoutText: {
        fontSize: 15,
        borderWidth: 1,
        width : windowWidth/4 + 20,
        height: 50,
        backgroundColor: "#FFFFFF"
    },
    check_icon: {
        width : windowWidth/6,
        height : 63,
        marginHorizontal: 30,
    },


    innerContainer:{  
        flex: 1,  
        flexDirection: "row"  
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
    },
    nextButton: {
        marginVertical: 5,
        marginHorizontal: -20,
        backgroundColor: '#FFFFFF',
        width : (windowWidth),
        alignContent: "center"
    },


    col: {
		flex: 1,
		marginBottom: 20,
		flexDirection: "row",
		alignItems: "center",
		textAlign: "left",
		textAlignVertical: "center",
	},
	text: {
		flex: 3,
		marginRight: 20,
	},
    spinner: {
		flex: 1,
		marginRight: 10,
		minWidth: 150,
	}



})