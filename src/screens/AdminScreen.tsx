import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  SectionList,
  ActivityIndicator,
} from 'react-native';
import {Api} from '../api/api';
import {ItemView} from '../components/ItemView';
import {AuthContext} from '../context/AuthContext';
import {GetEmpresa} from '../interfaces/appInteface';

export const AdminScreen = () => {
  const [Loading, setLoading] = useState(true);
  const [apidata, setData] = useState<GetEmpresa>();
  const {
    state: {token},
  } = useContext(AuthContext);

  useEffect(() => {
    getRes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const api = new Api();
  const getRes = async () => {
    const res: GetEmpresa = await api.GetEmpresa(token);
    setData(res);
    setLoading(false);
  };

  return (
    <View style={localstyle.constainer}>
      <View>
        {Loading && apidata === null ? (
          <ActivityIndicator />
        ) : (
          <SectionList
            sections={apidata}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item._id + index}
            renderItem={({item}) => <ItemView user={item} />}
            renderSectionHeader={({section: {alias}}) => (
              <Text style={localstyle.title1}> {alias} </Text>
            )}
          />
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
  title1: {
    marginTop: 20,
    fontSize: 20,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
});
