"use client";

import React from 'react';
import { MouseEnterProvider } from '@/components/ui/3d-card';

export default function ClientWrapper({ children }) {
  return <MouseEnterProvider>{children}</MouseEnterProvider>;
}