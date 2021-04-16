import React from 'react';
import { Dimensions } from 'react-native';
import XBar from 'react-native-x-bar';
import { StyleSheet, ScrollView, Text, Image , SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements'
import { TextInput } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const currentDate = new Date().toDateString();

export default function Add_New_Exercise({ navigation }){
    const List = {
        excName : 'temp',
        excWeight : 420,
        excSet : 69, 
        excRep : 42069
    };
    const [text, setText] = React.useState('');
    const [weight, setWeight] = React.useState(null);
    const [rep, setRep] = React.useState(null);
    const [set, setSet] = React.useState(null);

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.dateBar}>
                {"\n\n"}
                {currentDate}
                {"\n"}
            </Text>
            <Text style={styles.titleBar}>
                <Text>Add Exercise</Text>
                {"\n"}
            </Text>

        <SafeAreaView style={styles.container2}>
            <ScrollView style={styles.scrollView}> 
            <Text style={styles.formLabel}>
                <Text>Exercise name</Text>
                {"\n"}
            </Text>
            <TextInput style={styles.inputForm}
                placeholder='Name of exercise'
                onChangeText={text => setText(text)}
            />
            <Text style={styles.formLabel}>
                <Text>Weight (lb)</Text>
                {"\n"}
            </Text>
            <TextInput style={styles.inputForm}
                placeholder='Weight'
                keyboardType="numeric"
                onChangeText={weight => setWeight(weight)}
            />
            <Text style={styles.formLabel}>
                <Text>Reps</Text>
                {"\n"}
            </Text>
            <TextInput style={styles.inputForm}
                placeholder='Number of Reps'
                keyboardType="numeric"
                onChangeText={rep => setRep(rep)}
            />
            <Text style={styles.formLabel}>
                <Text>Sets</Text>
                {"\n"}
            </Text>
            
            <TextInput style={styles.inputForm}
                placeholder='Number of Sets'
                keyboardType="numeric"
                onChangeText={set => setSet(set)}
            />
            
                </ScrollView>
            </SafeAreaView>
            <SafeAreaView style = {styles.buttonArea}>
                <Button  style = {styles.addButtons}
                    title = "Submit Exercise"
                    onPress = {
                        List.excName = text,
                        List.excWeight = weight,
                        List.excRep = rep,
                        List.excSet = set,
                        () => navigation.navigate('add_workout_tab',List)
                    } 
                />
            </SafeAreaView>  
            <XBar style={styles.toolbar}
                slots={[
                    { 
                        children : <Image style={styles.toolbar_discover} source={require("./assets/C_discover.jpg")}/>,
                        onPress : () => {navigation.navigate('home_tab');}
                    },
                    { 
                        children : <Image style={styles.toolbar_workout} source={require("./assets/workout.jpg")}/>,
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
    dateBar: {
        fontSize: 15,
        marginHorizontal:20
    },
    titleBar: {
        fontSize: 30,
        marginHorizontal:20,
    },
    formLabel: {
        fontSize: 20,
        marginHorizontal:20,
        marginVertical: 20,
    },
    inputForm: {
        fontSize: 20,
        marginHorizontal:20,
    },
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
    container2: {
        padding: 24,
        flex: 1,
        fontSize:35,
        backgroundColor: '#FFFFFF'
    },
    addButtons: {
        marginVertical: 5,
        marginHorizontal: 1,
        backgroundColor: '#FFFFFF',
        width : (windowWidth)
    },
    buttonArea : {
        backgroundColor: '#F7DDE3',
        alignContent:'space-between'
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
