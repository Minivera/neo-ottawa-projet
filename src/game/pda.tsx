import React from 'react';
import styled from '@emotion/styled';
import { theme } from 'styled-tools';

import { PDATabControl } from '../components/pdaTabControl';
import { PDAHomeTab } from '../components/pdaHomeTab';
import { PDADocumentsTab } from '../components/pdaDocumentsTab';
import { PDAMapTab } from '../components/pdaMapTab';
import { PDAContactsTab } from '../components/pdaContactsTab';
import { PDAEvidenceTab } from '../components/pdaEvidenceTab';

export enum PDATab {
  HOME = 'home',
  DOCUMENTS = 'documents',
  MAP = 'map',
  CONTACTS = 'contacts',
  EVIDENCE = 'evidence',
}

export interface Document {
  name: string;
  path?: string;
}

export interface Contact {
  name: string;
  description: string;
  type: 'police' | 'resistance';
}

export interface Evidence {
  name: string;
  type: 'phone' | 'computer' | 'result' | 'disk';
}

export interface PDA {
  enabled?: boolean;
  open?: boolean;
  tab?: PDATab;
  documents: Document[];
  contacts: Contact[];
  evidence: Evidence[];
}

export interface PDAComponentProps {
  pdaState: PDA;
  onPDAClosed: () => void;
  onPDATabChanged: (tab: PDATab) => void;
}

const PDAContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  background: ${theme('colors.darkGreen')};
  font-size: 20px;
  font-family: VCR-OSD-MONO;
`;

export const PDAComponent: React.FunctionComponent<PDAComponentProps> = ({
  pdaState,
  onPDAClosed,
  onPDATabChanged,
}) => {
  let Tab: React.FunctionComponent<{ pdaState: PDA }> | null = null;
  switch (pdaState.tab) {
    case PDATab.HOME:
      Tab = PDAHomeTab;
      break;
    case PDATab.DOCUMENTS:
      Tab = PDADocumentsTab;
      break;
    case PDATab.MAP:
      Tab = PDAMapTab;
      break;
    case PDATab.CONTACTS:
      Tab = PDAContactsTab;
      break;
    case PDATab.EVIDENCE:
      Tab = PDAEvidenceTab;
      break;
  }

  return (
    <PDAContainer style={{ display: pdaState.open ? 'block' : 'none' }}>
      <PDATabControl
        onTabClick={onPDATabChanged}
        selectedTab={pdaState.tab || PDATab.HOME}
        onReturnClick={onPDAClosed}
      >
        {Tab && <Tab pdaState={pdaState} />}
      </PDATabControl>
    </PDAContainer>
  );
};
