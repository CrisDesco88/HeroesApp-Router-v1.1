import React from 'react';
import { AppRouter } from './router/AppRouter';


import 'animate.css';
import { AppTheme } from './Theme/AppTheme';
import { AuthErrorAlert } from './auth/components/AuthErrorAlert';

export const HeroesApp = () => {
  return (
		<>
			<AppTheme>
				<AppRouter />
				<AuthErrorAlert />
			</AppTheme>
		</>
	);
}
