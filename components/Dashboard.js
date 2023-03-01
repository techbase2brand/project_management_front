import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Dashboard = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleAddTask = () => {
    // Implement task adding functionality
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 30, width: "100%" }}>
        <View
          style={{
            height: "5%",
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#F5F5F5",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <View>
            <TouchableOpacity onPress={toggleOptions}>
              <Ionicons
                name={showOptions ? "close" : "menu"}
                size={40}
                color="#094781"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: 10,
            }}
          >
            <Ionicons name="notifications" size={25} color="#094781" />
            <Ionicons name="search" size={25} color="#094781" />
          </View>
        </View>
      </View>
      {/* <Text style={styles.header}>Dashboard</Text> */}
      {/* <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity> */}
      {showOptions && (
        <View style={styles.options}>
          <TouchableOpacity>
            <Text style={styles.option}>Option 1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.option}>Option 2</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.option}>Option 3</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ backgroundColor: "#F5F5F5",marginBottom:"10%",width:"100%",padding:"5%" }}>
          <Text style={{ fontWeight: "bold", fontSize: 30,marginLeft:"20%",color: 'rgba(0, 0, 0, 0.5)'}}>
            No task found
          </Text>
        </View>
        <View style={{ marginRight: "8%" }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add Task</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: "70",
    width: "auto",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
    marginTop: 16,
    marginBottom: 32,
  },
  addButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "#ff5722",
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  options: {
    position: "absolute",
    top: 64,
    left: 0,
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    elevation: 4,
  },
  option: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#008080",
    marginBottom: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 70,
    paddingRight: 70,
    borderRadius: 20,
  },
  button: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#094781",
    borderRadius: 25,
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    // marginBottom:80,
    // width:"70%",
    marginLeft: 40,
  },
});

export default Dashboard;
