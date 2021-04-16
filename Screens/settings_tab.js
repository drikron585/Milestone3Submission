import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, SafeAreaView} from 'react-native';
import { Button } from 'react-native-elements';
import { Dimensions } from 'react-native';
import XBar from 'react-native-x-bar';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const currentDate = new Date().toDateString();
const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64
  };

export default function Settings({ navigation }){
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.dateBar}>
                {"\n\n"}
                {currentDate}
                {"\n"}
            </Text>
            <Text style={styles.titleBar}>
                <Text>Settings</Text>
                {"\n"}
            </Text>
            
            <ScrollView style={styles.scrollView}>
                <Button style={styles.options_button}
                    title="Privacy Policy"
                    type="outline"
                    onPress = {() => console.log('Privacy pressed')}
                />
                <Button style={styles.delete_button}
                    title="Delete all data"
                    type="outline"
                    onPress = {() => console.log('Delete pressed')}
                />
            </ScrollView>

            <XBar style={styles.toolbar}
                slots={[
                    { 
                        children : <Image style={styles.toolbar_discover} source={require("./assets/discover.jpg")}/>,
                        onPress : () => {navigation.navigate('home_tab');}
                    },
                    { 
                        children : <Image style={styles.toolbar_workout} source={require("./assets/workout.jpg")}/>,
                        onPress : () => {navigation.navigate('workout_tab');}
                    },
                    {
                        children : <Image style={styles.toolbar_graph} source={require("./assets/graph.jpg")}/>,
                        onPress : () =>  {navigation.navigate('analytics_selection_tab');}
                    },
                    { 
                        children : <Image style={styles.toolbar_setting} source={require("./assets/C_setting.jpg")}/>,
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


    options_button: {
        fontSize: 30,
        marginHorizontal: windowWidth/9,
        marginVertical: 30,
        width : windowWidth/1.5,
        backgroundColor : "#FFFFFF"
    },
    delete_button: {
        fontSize: 30,
        marginHorizontal: windowWidth/9,
        width : windowWidth/1.5,
        backgroundColor : "#FFFFFF"
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