import React, { useEffect } from 'react';
import { SectionList } from 'react-native';

import styles from './styles';
import useTmdb from '../../hooks/useTmbd';
import { SafeAreaView } from 'react-native-safe-area-context';
import HorizontalMoviesList from './components/HorizontalMoviesList';
import VerticalMoviesList from './components/VerticalMoviesList';

import HeaderSection from './components/HeaderSection';

function Home() {
  const { getNowPlaying, getPopularMovies, sectionedMovies } = useTmdb();

  useEffect(() => {
    Promise.all([getNowPlaying(), getPopularMovies()]);
  }, []);

  const renderItem = ({ section, index }) => {
    if (section.orientation === 'horizontal' && index === 0) {
      return <HorizontalMoviesList nowPlayingMovies={section.data} />;
    }

    if (section.orientation === 'vertical' && index === 0) {
      return <VerticalMoviesList popularMoviesData={section.data} />;
    }

    return null;
  };

  const renderSectionHeader = ({ section }) => (
    <HeaderSection title={section.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sectionedMovies}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

export default Home;
