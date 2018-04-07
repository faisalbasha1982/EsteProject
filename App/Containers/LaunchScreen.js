import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <Container>
      <Header />
      <Content>

        <View style={styles.centered}>
          <Image source={Images.launch} style={styles.logo} />
        </View>

        <Form>
          <Item fixedLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item fixedLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
        </Form>
      </Content>
    </Container>
    )
  }
}


