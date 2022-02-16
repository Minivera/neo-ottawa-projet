import { get, set } from 'idb-keyval';

export const localstorageSaveKey = 'game-save';

export const saveSlotsCount = 4;

export interface SaveSlot {
  id: number;
  image: string | null;
  save: string;
}

export const saveSaveSlot = async (slot: SaveSlot): Promise<void> => {
  await set(`${localstorageSaveKey}_${slot.id}`, slot.save);
  await set(
    `${localstorageSaveKey}_${slot.id}_image`,
    (await slot.image) || ''
  );
};

export const loadSaveSlots = async (): Promise<SaveSlot[]> => {
  const promises: Promise<SaveSlot>[] = Array<number>(saveSlotsCount)
    .fill(0)
    .map(async (_, i): Promise<SaveSlot> => {
      const save = await get(`${localstorageSaveKey}_${i}`);
      const image = await get(`${localstorageSaveKey}_${i}_image`);

      if (!save || !image) {
        return {
          id: i,
          image: null,
          save: '{}',
        };
      }

      return {
        id: i,
        image: image !== '' ? image : null,
        save,
      };
    });

  return Promise.all(promises);
};
