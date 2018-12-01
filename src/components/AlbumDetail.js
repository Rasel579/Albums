import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ record }) => (
        <Card>
          <CardSection>
          <Text>{record.title}</Text>
          </CardSection>
        </Card>
    );


export default AlbumDetail;
