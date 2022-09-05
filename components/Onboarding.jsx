import { Button, Block } from 'galio-framework'
import { StyleSheet, SafeAreaView, FlatList, Animated } from 'react-native'
import React, {useState , useRef } from 'react'
import OnboardingItem from './OnboardingItem'
import Paginator from './Paginator'
import slides from '../slides'

export default function Onboarding() {

    
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;


  return (
        <SafeAreaView style={styles.container}>
            <Block flex={3}>
                <FlatList
                    data={slides}
                    renderItem={({item}) => <OnboardingItem item={item} />  } 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces = { false }
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset:  { x: scrollX }}}],
                        {
                          useNativeDriver: false
                        }
                    )}    
                />
            </Block>
            <Paginator data={slides} scrollX={scrollX} />
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    }
})