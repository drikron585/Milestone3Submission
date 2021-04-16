import { StyleSheet, ScrollView, View, Text, Image, TextInput, SafeAreaView} from 'react-native';
import { Dimensions, Alert } from 'react-native';
import XBar from 'react-native-x-bar';
import React from "react";
import {Button, CheckBox} from 'react-native-elements'

const jsondata = require('./analyticsData.json');


const windowWidth = Dimensions.get('window').width;

const currentDate = new Date().toDateString();

export default function workout_start3({ navigation }){

    return(
        <SafeAreaView style={styles.container}>
                <Text style={styles.dateBar}>
                    <Text>{navigation.getParam('workoutName')}      3/3</Text>
                    {"\n"}
                </Text>
                <Text style={styles.titleBar}>
                    <Text>{navigation.getParam('excName3')}</Text>
                    {"\n"}
                </Text>
            <ScrollView style={styles.scrollView}>
            <XBar style={styles.workoutBar}
                slots={[
                    { 
                        children : <Text style={styles.workoutText}>{"\n"}    {navigation.getParam('excWeight3')} (lb)</Text>,
                    },
                    { 
                        children : <Text style={styles.workoutText}>{"\n"}    {navigation.getParam('excRep3')} (reps)</Text>,
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
                        children : <Text style={styles.workoutText}>{"\n"}    {navigation.getParam('excWeight3')} (lb)</Text>,
                    },
                    { 
                        children : <Text style={styles.workoutText}>{"\n"}    {navigation.getParam('excRep3')} (reps)</Text>,
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
                        children : <Text style={styles.workoutText}>{"\n"}    {navigation.getParam('excWeight3')} (lb)</Text>,
                    },
                    { 
                        children : <Text style={styles.workoutText}>{"\n"}    {navigation.getParam('excRep3')} (reps)</Text>,
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
                        children : <Text style={styles.workoutText}>{"\n"}    {navigation.getParam('excWeight3')} (lb)</Text>,
                    },
                    { 
                        children : <Text style={styles.workoutText}>{"\n"}    {navigation.getParam('excRep3')} (reps)</Text>,
                    },
                    {
                        children : <Image style={styles.check_icon} source={require("./assets/check_mark.jpg")}/>,
                        onPress : () => {Alert.alert("You're done your workout!");}
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
                    title="Complete"
                    onPress = {() => {navigation.navigate('home_tab');}}      
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