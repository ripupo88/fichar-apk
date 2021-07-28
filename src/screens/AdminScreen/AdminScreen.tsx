import React from 'react';
import {View, SectionList, ActivityIndicator} from 'react-native';
import {Header} from '../../components/Header';
import {ItemView} from '../../components/ItemView';
import {ListHeader} from '../../components/ListHeader';
import {useAdmin} from './AdminHook';
import {adminStyle} from './AdminStyle';

export const AdminScreen = () => {
  const {Loading, apidata, token} = useAdmin();

  return (
    <View style={adminStyle().container}>
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
              renderSectionHeader={({section: {code, alias, name, cif}}) => (
                <ListHeader data={{code, alias, token, name, cif}} />
              )}
            />
          </>
        )}
      </View>
    </View>
  );
};
