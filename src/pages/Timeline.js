import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';

import {timelinePage} from './styles';
import {PostItem, PostInput, Header, TopicSelectModal} from '../components';
import auth from '@react-native-firebase/auth'

const Timeline = () => {

  const [topicModalFlag, setTopicModalFlag] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState(null)

  return (
    <SafeAreaView style={timelinePage.container}>
      <View style={timelinePage.container}>
       <Header
       title={selectedTopic}
        onTopicModalSelect={()=> setTopicModalFlag(true)}
       />
       <FlatList
        data={[]}
        renderItem={()=>null}
       />
       <PostInput
        onSendPost={(value=> console.log(value))}
       />



       <TopicSelectModal
        visibility={topicModalFlag}
        onClose= {()=> selectedTopic ? setTopicModalFlag(false): null}
        onTopicSelect= {(value)=>{
          setSelectedTopic(value);
          setTopicModalFlag(false)
        }}
       />
      </View>
    </SafeAreaView>
  );
};

export {Timeline};