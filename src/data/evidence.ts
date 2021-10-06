import { Evidence } from '../game/pda';

type piecesOfEvidenceKeys = 'DOSSIER_LEIGH_KANE' | 'TELEPHONE_LEIGH_KANE';

export const piecesOfEvidence: Record<piecesOfEvidenceKeys, Evidence> = {
  'DOSSIER_LEIGH_KANE': {
    type: 'disk',
    evidenceId: 'DOSSIER_LEIGH_KANE',
    name: 'DOSSIER_LEIGH_KANE',
  },
  'TELEPHONE_LEIGH_KANE': {
    type: 'phone',
    evidenceId: 'TELEPHONE_LEIGH_KANE',
    name: 'TELEPHONE_LEIGH_KANE',
  },
} as const;
