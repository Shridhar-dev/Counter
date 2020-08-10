import React from 'react';
import db from './firebase';
let counter_val;
class Count extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
        this.onAdd = this.onAdd.bind(this)
        this.onSubtract = this.onSubtract.bind(this)
        
    }
    /*componentDidMount(){
        db.collection('number').onSnapshot((snap)=>{
            let changes = snap.docChanges();
            changes.forEach((change)=>{
                counter_val = change.doc
            }
            )
        })
    }*/
    /*async onAdd(e){
        e.preventDefault();
        await db.collection("number").doc('1').update({count:counter_val.data().count + 1})
        console.log(counter_val.data().count)
        this.setState({
            count: counter_val.data().count
        });     

    }
    async onSubtract(e){
        e.preventDefault();
        await db.collection("number").doc('1').update({count:counter_val.data().count - 1})
        console.log(counter_val.data().count)
        this.setState({
            count: counter_val.data().count 
        });  
    }*/
    onAdd(e){
        e.preventDefault();
        this.setState(prevState=>{
            return{
            count: prevState.count + 1
        }
        });     

    }
    onSubtract(e){
        e.preventDefault();
        this.setState(prevState=>{
            return{
            count: prevState.count - 1
            }
        }
        )}
    render(){
        return(
            <>
            <h2>{this.state.count}</h2>
            <button onClick={this.onAdd}>+</button>
            <button onClick={this.onSubtract}>-</button>
            </>
        )
    }
}
export default Count;