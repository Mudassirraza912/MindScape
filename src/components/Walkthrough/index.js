import React, { useRef, useState } from 'react'
import { View, Text, Image, FlatList, Dimensions } from 'react-native'
import { Indicator } from './indicator'


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export const WalkThroughComponent = ({
    data = [
        {img: 'https://i.pinimg.com/originals/30/c6/54/30c654e9b6a44f2913eab09b0ae7312c.jpg', text: 'If you want to use Reanimated 2 then go through our installation steps https://docs.swmansion.com/react-native-reanimated/docs/installation'},
        {img: 'https://i.pinimg.com/originals/30/c6/54/30c654e9b6a44f2913eab09b0ae7312c.jpg', text: 'If you want to use Reanimated 2 then go through our installation steps https://docs.swmansion.com/react-native-reanimated/docs/installation'},
        {img: 'https://i.pinimg.com/originals/30/c6/54/30c654e9b6a44f2913eab09b0ae7312c.jpg', text: 'If you want to use Reanimated 2 then go through our installation steps https://docs.swmansion.com/react-native-reanimated/docs/installation'}
    ],
}) => { 

    const slider = useRef(null)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const onViewRef = React.useRef(({viewableItems})=> {
        // Use viewable items in state or as intended
        if(viewableItems.length > 0) {
            let index = viewableItems[0].index
            // onItemChanged(viewableItems[0].item)
            setSelectedIndex(index)
        }
    })
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

    return(
        <View>
            <FlatList 
                data={data}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                pagingEnabled
                snapToInterval={width}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
                initialScrollIndex={selectedIndex}  
                // onScrollToIndexFailed={info => {
                //     const wait = new Promise(resolve => setTimeout(resolve, 500));
                //     wait.then(() => {
                //     flatList.current?.scrollToIndex({ index: info.index, animated: true });
                //     });
                // }}
                renderItem={({item, index}) => {
                    return (
                        <View style={{flex: 1, width: width}}>
                            <Image source={{uri: item.img}} style={{height: 450, width: width}} />
                            <View style={{ padding: 30}}>
                                <Text style={{letterSpacing: 2, textAlign: 'center'}}>
                                    {item.text}
                                </Text>
                            </View>
                        </View>
                    )
                }}
            /> 
            <Indicator data={data} currenIndex={selectedIndex} />

        </View>
    )
}