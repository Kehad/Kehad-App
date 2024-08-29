import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Network from "expo-network";
import { useState, useEffect } from "react";

// npx expo install expo-network

export async function NetworkState({ setIpAddress, setNetworkState}) {
    const getIpAddress = async () => {
      const ip = await Network.getIpAddressAsync();
      console.log(ip);
      console.log('aa')
      setIpAddress(ip);
    };
    getIpAddress();

    const getNetworkState = async () => {
      const state = await Network.getNetworkStateAsync();
      console.log(state);
      console.log("bb");
      
      setNetworkState(JSON.stringify(state));
    };
    getNetworkState();
}

