import React from 'react';
import { View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

<script src="http://localhost:8097"></script>

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}




