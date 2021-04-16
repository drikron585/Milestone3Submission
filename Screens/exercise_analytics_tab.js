import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, SafeAreaView} from 'react-native';
import { Button, ListItem, Avatar } from 'react-native-elements';
import { Dimensions } from 'react-native';
import XBar from 'react-native-x-bar';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

const currentDate = new Date().toDateString();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const jsondata = require('./analyticsData.json');

  const graphDataPR = {
    labels: jsondata[1].months,
    datasets: [
      {
        data: jsondata[1].personalRecord,
        strokeWidth: 3 // optional
      }
    ],
    legend: [jsondata[1].name] // optional
  };

  let index = 0;

  let graph1weights = [];
  let graph1months = [];
  let graph1name = [];
  let graph2PR = [];

export default function Analytics({ navigation }){
    index = 0;

    jsondata.forEach(function (arrayItem) {        
        if(arrayItem.name.localeCompare(navigation.getParam('excName')) == 0){
            graph1weights = jsondata[index].weights;
            graph1months = jsondata[index].months;
            graph1name = jsondata[index].name;
            graph2PR = jsondata[index].personalRecord;
        }
        ++index;
    });
        
    return(
        <SafeAreaView style={styles.container}>
          <Text style={styles.dateBar}>
                {"\n\n"}
                {currentDate}
                {"\n"}
            </Text>
            <Text style={styles.titleBar}>
                <Text>{graph1name} Analytics</Text>
                {"\n"}
            </Text>
                <ScrollView style={styles.scrollView}>
                <Text style={styles.scrollView}>
                    {"    "}Average Weight Per Month
                </Text>
                <LineChart
                    data= {{
                        labels: graph1months,
                        datasets: [
                          {
                            data: graph1weights,
                            strokeWidth: 3 // optional
                          }
                        ],
                        legend: [graph1name] // optional
                      }}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    yAxisSuffix="lb"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    }}
                    style={{
                    marginVertical: 8,
                    borderRadius: 30
                    }}
                />
                <Text style={styles.scrollView}>
                    {"    "}Personal Record 
                </Text>
                <LineChart
                    data= {{
                        labels: graph1months,
                        datasets: [
                          {
                            data: graph2PR,
                            strokeWidth: 3 // optional
                          }
                        ],
                        legend: [graph1name] // optional
                      }}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    yAxisSuffix="lb"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    }}
                    style={{
                    marginVertical: 8,
                    borderRadius: 30
                    }}
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
                        children : <Image style={styles.toolbar_graph} source={require("./assets/C_graph.jpg")}/>,
                        onPress : () =>  {navigation.navigate('analytics_selection_tab');}
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
      fontSize: 15,
      marginHorizontal:20
    },
    titleBar: {
      fontSize: 30,
      marginHorizontal:20
    },
    titleText: {
        fontSize: 20,
    },
    scrollView: {
        flex: 1,
        fontSize:20,
        backgroundColor: '#F7DDE3',
        marginVertical:10
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