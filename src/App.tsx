import { useEffect, useState } from 'react';

import {UseMovieContext} from './hooks/useMovieContext';
import { Button } from './components/Button';
import { MovieCard } from './components/MovieCard';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';


export function App() {
  

  return (
    <UseMovieContext>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        < Content/>
      </div>        
    </UseMovieContext>

  )
}