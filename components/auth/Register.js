import React, {Component} from 'react';
import { View, Button, TextInput } from 'react-native';

export class Register extends Component() {
 constructor(props) {
     super(props);

     this.state ={
         email:"",
         password:"",
         name: ""
     }
     this.onSignUp = this.onSignUp.bind(this)

 }
 onSignUp(){

 }
 render(){
     return (
         <View>
             <TextInput>
                 placeholder="name"
                 onChangeText={(name) => this.setState({name})}
                 </TextInput>
             <TextInput>
                 placeholder="email"
                 onChangeText={(email) => this.setState({email})}
             </TextInput>
             <TextInput>
                 placeholder="password"
                 secureTextEntry={true}
                 onChangeText={(password) => this.setState({password})}
             </TextInput>
             <Button
             onPress={() =>this.onSignUp()}
             title={"Sign Up"}/>
         </View>
     )
 }
}

