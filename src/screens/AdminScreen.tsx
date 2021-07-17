import {useNavigationState} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  SectionList,
  ActivityIndicator,
} from 'react-native';
import {Api} from '../api/api';
import {Header} from '../components/Header';
import {ItemView} from '../components/ItemView';
import {ListHeader} from '../components/ListHeader';
import {AuthContext} from '../context/AuthContext';
import {GetEmpresa} from '../interfaces/appInteface';

export const AdminScreen = () => {
  const [Loading, setLoading] = useState(true);
  const [apidata, setData] = useState<GetEmpresa[]>([
    {
      alias: '',
      name: '',
      cif: '',
      code: '',
      QRurl: '',
      data: [],
    },
  ]);
  const {
    state: {token},
  } = useContext(AuthContext);
  const index = useNavigationState((state) => state.index);

  useEffect(() => {
    if (index === 0) {
      getRes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const api = new Api();

  const getRes = async () => {
    console.log('llama');
    const res: GetEmpresa[] = await api.GetEmpresa(token);
    setData(res);
    setLoading(false);
  };

  return (
    <View style={localstyle.constainer}>
      <View>
        {Loading && apidata === null ? (
          <ActivityIndicator />
        ) : (
          <>
            <Header text={'Tus Empresas'} />
            <SectionList
              sections={apidata}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, iindex) => item._id + iindex}
              renderItem={({item}) => <ItemView user={item} />}
              renderSectionHeader={({section: {code, alias}}) => (
                <ListHeader data={{code, alias, token}} />
              )}
            />
          </>
        )}
      </View>
    </View>
  );
};

const localstyle = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
});
