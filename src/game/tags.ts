import { Character } from './character';
import { Characters } from '../data/characters';

export interface CharacterTag {
  character?: Character;
  invisible?: boolean;
  expression?: string;
}

export interface PlacementTag {
  centered?: boolean;
  phone?: boolean;
}

export interface QuizTags {
  question?: boolean;
  retroaction?: boolean;
  index?: number;
}

export const extractCharacterTags = (tags: string[] | null): CharacterTag => {
  if (!tags) {
    return {};
  }

  const tag: CharacterTag = {};

  tags.forEach(element => {
    element.split(' ').forEach(part => {
      const subparts = part.split('=');
      if (subparts.length < 1) {
        throw new Error(`Invalid tag detected in story, ${part}`);
      }

      switch (subparts[0].trim()) {
        // TODO: Rename to french
        case 'character': {
          if (subparts.length < 2) {
            throw new Error(`Invalid tag detected in story, ${part}`);
          }

          tag.character = Characters[subparts[1].trim().toUpperCase()];
          break;
        }
        case 'expression': {
          if (subparts.length < 2) {
            throw new Error(`Invalid tag detected in story, ${part}`);
          }

          tag.expression = subparts[1].trim().toLowerCase();
          break;
        }
        case 'invisible':
          tag.invisible = true;
          break;
      }
    });
  });

  return tag;
};

export const extractPlacementTags = (tags: string[] | null): PlacementTag => {
  if (!tags) {
    return {};
  }

  const tag: PlacementTag = {};

  tags.forEach(element => {
    element.split(' ').forEach(part => {
      const subparts = part.split('=');
      if (subparts.length < 1) {
        throw new Error(`Invalid tag detected in story, ${part}`);
      }

      switch (subparts[0].trim()) {
        // TODO: Rename to french
        case 'center':
          tag.centered = true;
          break;
        case 'phone':
          tag.phone = true;
          break;
      }
    });
  });

  return tag;
};

export const extractQuizTags = (tags: string[] | null): QuizTags => {
  if (!tags) {
    return {};
  }

  const tag: QuizTags = {};

  tags.forEach(element => {
    element.split(' ').forEach(part => {
      const subparts = part.split('=');
      if (subparts.length < 1) {
        throw new Error(`Invalid tag detected in story, ${part}`);
      }

      switch (subparts[0].trim()) {
        case 'index': {
          if (subparts.length < 2 || isNaN(parseInt(subparts[1].trim()))) {
            throw new Error(`Invalid tag detected in story, ${part}`);
          }

          tag.index = parseInt(subparts[1].trim());
          break;
        }
        case 'question':
          tag.question = true;
          break;
        case 'retroaction':
          tag.retroaction = true;
          break;
      }
    });
  });

  return tag;
};
