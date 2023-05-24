import {memo} from 'react';
import {Dimensions, Text, View} from 'react-native';

interface Props {
  title: string;
  backgroundColor: string;
}

const CommonHeader = (props: Props) => {
  const {title, backgroundColor} = props;

  return (
    <View
      style={{
        height: 30,
        width: Dimensions.get('screen').width,
        borderWidth: 1,
        backgroundColor: backgroundColor,
      }}>
      <Text>{title}</Text>
    </View>
  );
};

export default memo(CommonHeader);
