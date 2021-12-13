import React, { useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RootStackParamList } from '../../routes/app.routes';

import { Appointment, AppointmentProps } from '../../components/Appointment';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Background } from '../../components/Background';
import { Profile } from '../../components/Profile';

import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { styles } from './styles';
import { Load } from '../../components/Load';
import { ModalLogout } from '../../components/ModalLogout';

type authHomeProp = StackNavigationProp<RootStackParamList, 'Home'>;

export function Home() {
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [openModalLogout, SetOpenModalLogout] = useState(false);
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

  const navigation = useNavigation<authHomeProp>();

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate('AppointmentDetails', guildSelected);
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  function handleOpenModalLogout() {
    SetOpenModalLogout(true);
  }

  function handleCloseModalLogout() {
    SetOpenModalLogout(false);
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if(category) {
      setAppointments(storage.filter(item => item.category === category));
    } else {
      setAppointments(storage);
    }

    setLoading(false);
  }

  useFocusEffect(useCallback(() => {
    loadAppointments();
  }, [category]));

  return (
    <Background>
      <View style={styles.header}>
        <Profile openModal={handleOpenModalLogout} />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>
      
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

    {  
      loading
      ?
      <Load />
      :
      <>
      <ListHeader 
        title="Partidas agendadas"
        subtitle={`Total ${appointments.length}`}
      />

      <FlatList
        data={appointments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Appointment data={item} onPress={() => handleAppointmentDetails(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        contentContainerStyle={{ paddingBottom: 69 }}
        style={styles.matches}
        showsVerticalScrollIndicator={false}
      />
      </>
    }

    <ModalLogout
      visible={openModalLogout}
      closeModal={handleCloseModalLogout}
    />

    </Background>
  );
}