import React from 'react';
import { Modal, ModalProps, View, TouchableWithoutFeedback, Text } from 'react-native';
import { useAuth } from '../../hooks/auth';
import { Background } from '../Background';
import { ButtonLogout } from '../ButtonLogout';

import { styles } from './styles';

type Props = ModalProps & {
  closeModal: () => void;
}

export function ModalLogout({closeModal, ...rest}: Props) {

  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.messageLogout}>
                <Text style={styles.titleLogout}>Deseja sair do </Text>
                <Text style={styles.firstTitleAppLogout}>Game</Text>
                <Text style={styles.secondTitleAppLogout}>Play</Text>
                <Text style={styles.firstTitleAppLogout}>?</Text>
              </View>

              <View style={styles.wrapperButtons}>
                <View style={styles.buttonNoLogout}>
                  <ButtonLogout title="Não" withoutColor onPress={closeModal} />
                </View>
                <View style={styles.buttonYesLogout}>
                  <ButtonLogout title="Sim" onPress={handleSignOut} />
                </View>
              </View>

            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}