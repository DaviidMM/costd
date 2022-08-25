import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/auth';

export default function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}
