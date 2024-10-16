import { CanActivateFn } from '@angular/router';

// Inject -> inyección de servicios
import { inject } from '@angular/core';

import { AuthService } from '../modules/autentificacion/services/auth.service';

import { Router } from '@angular/router';

// Operadores tipo "observables"
import { map, switchMap, of, from } from 'rxjs';

export const rutaProtegidaGuard: CanActivateFn = (route, state) => {
  // Inyectamos/ instanciamos servicio de Autentificación en el guardián (forma local)
  const servicioAuth = inject (AuthService);

  // Inyectamos/ instanciamos servicio de rutas de forma local
  const servicioRutas = inject (Router);

  // Especificamos cuál es el rol que va a esperar el guardián para activarse
  const rolEsperado = "admin";

  return true;
};
