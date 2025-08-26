import React from 'react';
import { createRoot } from 'react-dom/client';
import Leaderboard from './Leaderboard.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Leaderboard />);