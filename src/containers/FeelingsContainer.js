import React from 'react'
import FeelingsTable from '../components/FeelingsTable.js'
import Box from '@material-ui/core/Button';
import Snackbar from '../components/Snackbar.js'
class FeelingsContainer extends React.Component {

    state = {
        daily: '', 
        weekly: '', 
        allTime: '',
        yesterday: '',
        allTimeYesterday: ''
    }

    componentDidMount(){
        fetch('http://localhost:3000/sentcharges')
        .then(resp => resp.json())
        .then(resp => {
        //get todays date
            let thisDate = new Date()
        //get the number of the month
            let thisDateDay = thisDate.getDate()
        //convert created_at on sentcharge to a number of the month
            let newResps = resp.map(sentcharge => 
                { return {...sentcharge, created_at: this.convertToDay(sentcharge.created_at)}}
            )
        //finding all time scores yesterday 
            let filteredYesterdayAllTimeResps = newResps.filter(sentcharge => sentcharge.created_at !== thisDateDay)
            let scoresMapped = this.mapScores(filteredYesterdayAllTimeResps)
            let filteredYesterdayAllTime = this.filterNulls(scoresMapped)
            this.setState({
                allTimeYesterday: this.sum(filteredYesterdayAllTime)
            })

        //finding all time scores
            let scoresAllTime = this.mapScores(resp)
            let filteredAllTime = this.filterNulls(scoresAllTime)
            this.setState({
                allTime: this.sum(filteredAllTime)
            })
              
        //finding todays score
            let filteredResps = this.filterWeekly(newResps, thisDateDay)
            let todayScores = this.mapScores(filteredResps)
            if(todayScores.length > 0){
                let todayFiltered = this.filterNulls(todayScores)
                this.setState({
                    daily: this.sum(todayFiltered)
                })
            } 
           
        //finding yesterdays score 
            let yesterday = thisDate.setDate(thisDate.getDate() - 1);
            //yesterdays date
            let test = new Date(yesterday)
            //yesterdays date of month
            let realYesterday = test.getDate()
        
            let filteredYesterdayResps = this.filterWeekly(newResps, realYesterday)
            let yesterdayScores = this.mapScores(filteredYesterdayResps)
            if(yesterdayScores.length > 0){
                let yesterdayFiltered = this.filterNulls(yesterdayScores)
                this.setState({
                    yesterday: this.sum(yesterdayFiltered)
                })
            }
           

            //corrects for monthly wrap around for a 30 day month
              let day = thisDateDay 
              if(this.day - 7 === 0){
                  day = 1
              } else if(this.day - 7 === -1){
                  day = 30
              } else if(this.day - 7 === -2){
                  day = 29
              } else if(this.day - 7 === -3){
                day = 28
              } else if(this.day - 7 === -4){
                day = 27
              } else if(this.day - 7 === -5){
                day = 26
              } else if(this.day - 7 === -6){
                day = 25
              } else {
                  day = (day - 7) + 1
              }
              
        //weekly scores
            let filteredWeeklyResps = this.filterWeekly(newResps, thisDateDay, day)
            let weeklyScores = this.mapScores(filteredWeeklyResps)
            if(weeklyScores.length > 0){
                let weeklyFiltered = this.filterNulls(weeklyScores)
                this.setState({
                     weekly: this.sum(weeklyFiltered)
                })
            }
        })  
    }

    filterWeekly = (array, thisDateDay, day=null) => {
        if(day === null){
            return array.filter(sentcharge => sentcharge.created_at === thisDateDay)
        } else {
            return array.filter(sentcharge => sentcharge.created_at <= thisDateDay && sentcharge.created_at >= day)
        }      
    }

    mapScores = (array) => {
       return array.map(sentcharge => sentcharge.sentiment_score)
    }
    
    filterNulls = (array) => {
        return array.filter(function (el) {
            return el != null;
          });
    }

    add = (a,b) => a + b

    sum = (array) => {
        return array.reduce(this.add) / array.length
    }

    convertToDay = (stringDate) => {
        let parsedDate = Date.parse(stringDate)
        let newDate = new Date(parsedDate)
        let number_of_month = newDate.getDate()
        return number_of_month
    }

    convertToMonth = (stringDate) => {
        let parsedDate = Date.parse(stringDate)
        let newDate = new Date(parsedDate)
        let number_month = newDate.getMonth()
        return number_month
    }

    render(){
        const box = {
            width: '600px',
            boxShadow: '5px 5px #40907F',
            backgroundColor: "#63E2C6",
            cursor: 'default'
            }
        return (
            <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                <Box  disableRipple={true} style={box}>
                    <h1 style={{color: 'white', fontFamily: 'Noto Sans' + "sans-serif", margin: '0', fontSize: '40px'
                    }}>
                        How are we feeling?
                    </h1>
                </Box>
                    <br></br>
                    <br></br>
                    <br></br>
                <FeelingsTable time={this.state} />  
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                 <Snackbar />
            </div>
        )
    }
}

export default FeelingsContainer 