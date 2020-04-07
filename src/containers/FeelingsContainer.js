import React from 'react'
import FeelingsTable from '../components/FeelingsTable.js'
import Box from '@material-ui/core/Button';

class FeelingsContainer extends React.Component {

    state = {
        daily: '', 
        weekly: '', 
        monthly: '',
        allTime: '',
    }

    componentDidMount(){
        fetch('http://localhost:3000/sentcharges')
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)

            //finding all time scores
            let scores = resp.map(resp => resp.sentiment_score)
            let filtered = scores.filter(function (el) {
                return el != null;
              });
              const add = (a, b) =>
                a + b
              // use reduce to sum our array
              console.log(filtered)
              const sum = filtered.reduce(add) / filtered.length
              this.setState({
                  allTime: sum 
              })
              
              //finding daily score 

              //map created_at to number of month 
            let newResps = resp.map(sentcharge => 
                { return {...sentcharge, created_at: this.convertToDay(sentcharge.created_at)}}
            )
              let thisDate = new Date()
              let thisDateDay = thisDate.getDate()
           
                //filter sentcharges that match todays number of month
            let filteredResps = newResps.filter(sentcharge => sentcharge.created_at === thisDateDay)
            //summing scores
            let todayScores = filteredResps.map(sentcharge => sentcharge.sentiment_score)
            //filter any nulls
            let todayFiltered = todayScores.filter(function (el) {
                return el != null;
              });
              const add1 = (a, b) =>
                a + b
              // use reduce to sum our array
              const sum1 = todayFiltered.reduce(add1) / todayFiltered.length
              this.setState({
                  daily: sum1
              })

              //filter weekly
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
              
                 //filter sentcharges that match todays number of month
                let filteredWeeklyResps = newResps.filter(sentcharge => sentcharge.created_at <= thisDateDay && sentcharge.created_at >= day)
                //summing scores
                let weeklyScores = filteredWeeklyResps.map(sentcharge => sentcharge.sentiment_score)
                //filter any nulls
                let weeklyFiltered = weeklyScores.filter(function (el) {
                    return el != null;
                });
                const add2 = (a, b) =>
                    a + b
                // use reduce to sum our array
                const sum2 = weeklyFiltered.reduce(add2) / weeklyFiltered.length
                this.setState({
                    weekly: sum2
                })


                //filter monthly

                //map 
                let newMonthlyResps = resp.map(sentcharge => 
                    { return {...sentcharge, created_at: this.convertToMonth(sentcharge.created_at)}}
                )
                  
                  let thisDateMonth = thisDate.getMonth()

                    //filter sentcharges that match month
                    let filteredMonthlyResps = newMonthlyResps.filter(sentcharge => sentcharge.created_at === thisDateMonth)
                    //summing scores
                    let monthlyScores = filteredMonthlyResps.map(sentcharge => sentcharge.sentiment_score)
                    //filter any nulls
                    let monthlyFiltered = monthlyScores.filter(function (el) {
                        return el != null;
                    });
                    const add3 = (a, b) =>
                        a + b
                    // use reduce to sum our array
                    const sum3 = monthlyFiltered.reduce(add3) / monthlyFiltered.length
                    this.setState({
                        monthly: sum3
                    })
                 
               console.log(thisDateMonth)
               console.log(newMonthlyResps)
                console.log(this.state.monthly)
            //   var oneWeekAgo = new Date();
            //   console.log(oneWeekAgo)
            //    let x = oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
            //    console.log(x)
            //    let y = new Date(x)
            //    console.log(y)
        })

        
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
            width: '500px',
            boxShadow: '5px 5px #40907F',
            backgroundColor: "#63E2C6",
                }
        return (
            <div>
            
            
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Box  style={box}>
                    <h1 style={{color: 'white'}}>How are we feeling?</h1>

                </Box>
                <br></br>
                <br></br>
                <br></br>
                <FeelingsTable time={this.state} />  
                   
            </div>
        )
    }
}

export default FeelingsContainer 