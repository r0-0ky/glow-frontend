'use client'

import { createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import {
  createToolsBarStore,
  initToolsBarStore,
} from '@/src/app/stores/tools-bar/tools-bar.store'
import { ToolsBarStoreApi, ToolsBarStoreProviderProps } from './types'
import { ToolsBarStore } from '../../stores/tools-bar/types'

export const ToolsBarStoreContext = createContext<ToolsBarStoreApi | undefined>(
  undefined,
)

export const ToolsBarStoreProvider = ({
  children,
}: ToolsBarStoreProviderProps) => {
  
  const storeRef = useRef<ToolsBarStoreApi>()
  if (!storeRef.current) {
    storeRef.current = createToolsBarStore(initToolsBarStore())
  }

  return (
    <ToolsBarStoreContext.Provider value={storeRef.current}>
      {children}
    </ToolsBarStoreContext.Provider>
  )
}

export const useToolsBarStore = <T,>(
  selector: (store: ToolsBarStore) => T,
): T => {
  const toolsBarStoreContext = useContext(ToolsBarStoreContext)

  if (!toolsBarStoreContext) {
    throw new Error(`useToolsBarStore must be used within ToolsBarStoreProvider`)
  }

  return useStore(toolsBarStoreContext, selector)
}