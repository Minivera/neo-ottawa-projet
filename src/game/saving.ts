export const localstorageSaveKey = 'game-save';

export const saveSlotsCount = 4;

export interface SaveSlot {
  id: number;
  image: string | null;
  save: string;
}

export const saveSaveSlot = async (slot: SaveSlot): Promise<void> => {
  localStorage.setItem(`${localstorageSaveKey}_${slot.id}`, slot.save);
  localStorage.setItem(
    `${localstorageSaveKey}_${slot.id}_image`,
    await slot.image || ''
  );
};

export const loadSaveSlots = async (): Promise<SaveSlot[]> => {
  const promises: Promise<SaveSlot>[] = [];
  for (let i = 0; i < saveSlotsCount; i++) {
    promises.push(new Promise<SaveSlot>(resolve => {
      const save = localStorage.getItem(`${localstorageSaveKey}_${i}`);
      const image = localStorage.getItem(`${localstorageSaveKey}_${i}_image`);

      if (!save || !image) {
        resolve({
          id: i,
          image: null,
          save: '{}',
        });
        return;
      }

      resolve({
        id: i,
        image: image !== '' ? image : null,
        save,
      });
    }));
  }

  return Promise.all(promises);
};

export const loadSaveSlot = async (slotID: number): Promise<SaveSlot> => {
  const save = localStorage.getItem(`${localstorageSaveKey}_${slotID}`);
  const image = localStorage.getItem(`${localstorageSaveKey}_${slotID}_image`);

  if (!save || !image) {
    return {
      id: slotID,
      image: null,
      save: '{}',
    };
  }

  return {
    id: slotID,
    image: image !== '' ? image : null,
    save,
  };
};
