import { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, Alert } from "react-native";
import axios from "axios";

const AddDetails = () => {
   const [name, setName] = useState("");
   const [employeeId, setEmployeeId] = useState("");
   const [dob, setDob] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const [joiningDate, setJoiningDate] = useState("");
   const [salary, setSalary] = useState("");
   const [address, setAddress] = useState("");
   const [designation, setDesignation] = useState("");

   const handleRegister = () => {
      const employeeData = {
         employeeName: name,
         employeeId: employeeId,
         designation: designation,
         phoneNumber: phoneNumber,
         dateOfBirth: dob,
         joiningDate: joiningDate,
         activeEmployee: true,
         salary: salary,
         address: address,
      };

      axios
         .post(`${process.env.REACT_APP_BACKEND_URL}/addEmployee`, employeeData)
         .then((response) => {
            Alert.alert("Registration Successful", "You have been registered successfully");
            setName("");
            setEmployeeId("");
            setDob("");
            setPhoneNumber("");
            setSalary("");
            setAddress("");
            setJoiningDate("");
            setDesignation("");
         })
         .catch((error) => {
            Alert.alert("Registration Fail", "An error occurred during registration");
            console.log("Register failed", error);
         });
   };

   return (
      <ScrollView
         style={{
            flex: 1,
            backgroundColor: "white",
         }}
      >
         <View style={{ padding: 10 }}>
            <Text
               style={{
                  fontSize: 17,
                  fontWeight: "bold",
               }}
            >
               Add new employee
            </Text>
            <TextInput
               style={{
                  padding: 10,
                  borderColor: "#D0D0D0",
                  borderWidth: 1,
                  marginTop: 10,
                  borderRadius: 5,
               }}
               placeholder='Poland'
               placeholderTextColor={"black"}
            />

            <View
               style={{
                  marginVertical: 10,
               }}
            >
               <Text
                  style={{
                     fontSize: 17,
                     fontWeight: "bold",
                  }}
               >
                  Full Name
               </Text>
               <TextInput
                  value={name}
                  onChangeText={(text) => setName(text)}
                  style={{
                     padding: 10,
                     borderColor: "#D0D0D0",
                     borderWidth: 1,
                     marginTop: 10,
                     borderRadius: 5,
                  }}
                  placeholder='Enter full name'
                  placeholderTextColor={"black"}
               />
            </View>

            <View>
               <Text
                  style={{
                     fontSize: 17,
                     fontWeight: "bold",
                  }}
               >
                  Employee ID
               </Text>
               <TextInput
                  value={employeeId}
                  onChangeText={(text) => setEmployeeId(text)}
                  style={{
                     padding: 10,
                     borderColor: "#D0D0D0",
                     borderWidth: 1,
                     marginTop: 10,
                     borderRadius: 5,
                  }}
                  placeholder='Employee ID'
                  placeholderTextColor={"black"}
               />
            </View>

            <View
               style={{
                  marginVertical: 10,
               }}
            >
               <Text
                  style={{
                     fontSize: 17,
                     fontWeight: "bold",
                  }}
               >
                  Designation
               </Text>
               <TextInput
                  value={designation}
                  onChangeText={(text) => setDesignation(text)}
                  style={{
                     padding: 10,
                     borderColor: "#D0D0D0",
                     borderWidth: 1,
                     marginTop: 10,
                     borderRadius: 5,
                  }}
                  placeholder='Designation'
                  placeholderTextColor={"black"}
               />
            </View>

            <View>
               <Text
                  style={{
                     fontSize: 17,
                     fontWeight: "bold",
                  }}
               >
                  Phone Number
               </Text>
               <TextInput
                  value={phoneNumber}
                  onChangeText={(text) => setPhoneNumber(text)}
                  style={{
                     padding: 10,
                     borderColor: "#D0D0D0",
                     borderWidth: 1,
                     marginTop: 10,
                     borderRadius: 5,
                  }}
                  placeholder='Phone Number'
                  placeholderTextColor={"black"}
               />
            </View>

            <View
               style={{
                  marginVertical: 10,
               }}
            >
               <Text
                  style={{
                     fontSize: 17,
                     fontWeight: "bold",
                  }}
               >
                  Date of Birth
               </Text>
               <TextInput
                  value={dob}
                  onChangeText={(text) => setDob(text)}
                  style={{
                     padding: 10,
                     borderColor: "#D0D0D0",
                     borderWidth: 1,
                     marginTop: 10,
                     borderRadius: 5,
                  }}
                  placeholder='Enter Date of Birth'
                  placeholderTextColor={"black"}
               />
            </View>

            <View>
               <Text
                  style={{
                     fontSize: 17,
                     fontWeight: "bold",
                  }}
               >
                  Joining Date
               </Text>
               <TextInput
                  value={joiningDate}
                  onChangeText={(text) => setJoiningDate(text)}
                  style={{
                     padding: 10,
                     borderColor: "#D0D0D0",
                     borderWidth: 1,
                     marginTop: 10,
                     borderRadius: 5,
                  }}
                  placeholder='Joining Date'
                  placeholderTextColor={"black"}
               />
            </View>

            <View
               style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 10,
               }}
            >
               <Text>Active Employee</Text>
               <Text
                  style={{
                     fontWeight: "bold",
                  }}
               >
                  True
               </Text>
            </View>

            <View
               style={{
                  marginVertical: 10,
               }}
            >
               <Text
                  style={{
                     fontSize: 17,
                     fontWeight: "bold",
                  }}
               >
                  Salary
               </Text>
               <TextInput
                  value={salary}
                  onChangeText={(text) => setSalary(text)}
                  style={{
                     padding: 10,
                     borderColor: "#D0D0D0",
                     borderWidth: 1,
                     marginTop: 10,
                     borderRadius: 5,
                  }}
                  placeholder='Enter Salary'
                  placeholderTextColor={"black"}
               />
            </View>

            <View>
               <Text
                  style={{
                     fontSize: 17,
                     fontWeight: "bold",
                  }}
               >
                  Address
               </Text>
               <TextInput
                  value={address}
                  onChangeText={(text) => setAddress(text)}
                  style={{
                     padding: 10,
                     borderColor: "#D0D0D0",
                     borderWidth: 1,
                     marginTop: 10,
                     borderRadius: 5,
                  }}
                  placeholder='Enter Address'
                  placeholderTextColor={"black"}
               />
            </View>

            <Pressable
               onPress={handleRegister}
               style={{
                  backgroundColor: "#ABCABA",
                  padding: 10,
                  marginTop: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
               }}
            >
               <Text
                  style={{
                     fontWeight: "bold",
                     color: "white",
                  }}
               >
                  Add Employee
               </Text>
            </Pressable>
         </View>
      </ScrollView>
   );
};
export default AddDetails;

const styles = StyleSheet.create({});