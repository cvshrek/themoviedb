import { Colors } from '@constants';
import React, { useState, useEffect } from 'react';
    import { View } from 'react-native';
    import Svg, { Circle, Text as SvgText } from 'react-native-svg';
    
    interface ProgressCircleProps {
      radius: number;
      strokeWidth: number;
      progress: number; 
      color: string;
    }
    
    const ProgressCircle: React.FC<ProgressCircleProps> = ({
      radius,
      strokeWidth,
      progress,
      color,
    }) => {
      const circumferenceValue = 2 * Math.PI * radius;
      const strokeDashoffset = circumferenceValue * (1 - progress);
      const progressValue = Math.round(progress * 100);
    
      return (
        <View style={{ aspectRatio: 1 }}>
          <Svg width={radius * 2} height={radius * 2}>
            <Circle
              stroke={color}
              fill="transparent"
              strokeWidth={strokeWidth}
              strokeDasharray={circumferenceValue}
              strokeDashoffset={-strokeDashoffset}
              cx={radius}
              cy={radius}
              r={radius - strokeWidth / 2}
              
            />
            <SvgText
                x="70%"
                y="40%"
                textAnchor="middle"
                alignmentBaseline="text-top"
                fontSize={radius / 5}
                fill={Colors.white}
                fontWeight="bold"
              >
                %
            </SvgText>
            <SvgText
              x="50%"
              y="50%"
              textAnchor="middle"
              alignmentBaseline="middle"
              fontSize={radius / 2.5}
              fill={Colors.white}
              fontWeight="bold"
            >
              {progressValue}
            </SvgText>
            
          </Svg>
        </View>
      );
    };
    
    export default ProgressCircle