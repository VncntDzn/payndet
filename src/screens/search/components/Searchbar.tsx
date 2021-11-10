import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View} from 'react-native';
import {Layout, Text, Input, Icon, Button} from '@ui-kitten/components';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {FETCH_SEARCH_RESOURCE} from 'store/slices/kitsu/thunks';
import {
  SEARCHED_ANIME_DATA,
  SEARCHED_STATUS,
} from 'store/slices/kitsu/fetchSearchResource';

import {CustomSpinner} from 'components';

const Seachbar = ({navigation}) => {
  const dispatch = useAppDispatch();
  const status: any = useAppSelector(SEARCHED_STATUS);
  const searchedData: any = useAppSelector(SEARCHED_ANIME_DATA);
  const [search, setSearch] = useState<string | number>('');
  const handleNavigation = () => {
    dispatch(FETCH_SEARCH_RESOURCE({anime: search}));
  };
  const navigate = () => {
    navigation.navigate('KitsuAnimeAll', {
      data: searchedData.data,
    });
  };
  const [spinner, setSpinner] = useState<boolean>(false);

  useEffect(() => {
    if (status === 'loading') {
      setSpinner(!spinner);
    } else if (status === 'finished') {
      setSpinner(!spinner);
      navigate();
    }
  }, [status]);
  return (
    <>
      <CustomSpinner visible={spinner} />
      <Input
        placeholder="Search something here..."
        size="large"
        style={{zIndex: spinner ? 1 : 2}}
        onChangeText={e => setSearch(e)}
        accessoryRight={
          <Button
            onPress={handleNavigation}
            appearance="ghost"
            accessoryLeft={<Icon name="search" />}
          />
        }
      />
    </>
  );
};

Seachbar.propTypes = {};

export default Seachbar;
