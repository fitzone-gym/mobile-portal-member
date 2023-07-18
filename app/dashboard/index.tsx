import styles from "../../styles/dashboard.style";

import {View, TouchableOpacity} from 'react-native';

import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import { Avatar, Button, Card, Text } from 'react-native-paper';



export default function Dashboard() {
    return (
      <PaperProvider>

<Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle"/>
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>

      </PaperProvider>
    );
  }
  
 