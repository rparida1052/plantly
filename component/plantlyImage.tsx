import { Image,useWindowDimensions } from "react-native";

export default function PlantlyImage(){
    const {width} = useWindowDimensions();
    const imageWidth = Math.min(width/1.4,400);
    return (

        <Image source={require("@/assets/plantly.png")} style={{width:imageWidth,height:imageWidth}}/>
    )
}