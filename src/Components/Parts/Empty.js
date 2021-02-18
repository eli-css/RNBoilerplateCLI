import React from 'react'
import { View, Text } from 'react-native';


function Empty() {
    return (
        <View style={{ alignItems: 'center', marginTop: 30 }}>
            <Text style={{ color: '#ff4500', fontWeight: '700', fontSize: 20 }}>
                No Transactions yet
            </Text>
        </View>
    )
}


export default Empty;