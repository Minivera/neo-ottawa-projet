// Keep this in memory to prevent the window from dumping the images we preloaded
const imageReferences: Record<string, HTMLImageElement> = {};

export const loadImage = async (path: string, onComplete: (element: HTMLImageElement) => void): Promise<void> => {
    const image = new Image();
    image.src = path;
    imageReferences[path] = image;
    image.setAttribute('style', 'display: none; height: 0px; width: 0px;');
    document.querySelector('body')?.appendChild(image);

    const finalize = (resolve: () => void) => {
        if (image.complete) {
            onComplete(image);
            resolve();
            return;
        }

        setTimeout(() => finalize(resolve), 100);
    };

    return new Promise<void>(resolve => finalize(resolve));
};
