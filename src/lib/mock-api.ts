/**
 * Mocked API calls return Promises
 * Using localStorage as simulated DB
 * Added delay helper to simulate latency
 */

export interface UserImage {
    id: string;
    name: string;
    url: string;
}

const STORAGE_KEY = "images";
const LATENCY = 300;

// Helper: Returns all images from localStorage
function loadImages(): UserImage[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

// Helper: Saves images to localStorage
function saveImages(images: UserImage[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
}

// Helper: Simulate network delay
function delay(ms: number = LATENCY) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Mocks uploading an image to DB (localStorage)
export async function uploadImage(file: File): Promise<UserImage> {
    await delay();
    if (!file || !file.type.startsWith("image/")) {
        throw new Error("Only valid image files are allowed.");
    }

    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.onload = () => {
            const newImage: UserImage = {
                id: crypto.randomUUID(),
                name: file.name,
                url: reader.result as string,
            };

            const images = loadImages();
            const updatedImages = [...images, newImage];
            saveImages(updatedImages);
            resolve(newImage);
        };

        reader.onerror = () => {
            reject(new Error("Error reading image file."));
        };

        reader.readAsDataURL(file);
    });
}

// Mocks deleting an image from DB (localStorage)
export async function deleteImage(id: string): Promise<void> {
    await delay();

    const images = loadImages();
    const updatedImages = images.filter(image => image.id !== id);
    saveImages(updatedImages);
}

// Mocks fetching all images from DB (localStorage)
export async function fetchAllImages(): Promise<UserImage[]> {
    await delay();

    return loadImages();
}

// Mocks searching images by name in DB (localStorage)
export async function searchImages(query: string): Promise<UserImage[]> {
    await delay();

    const images = loadImages();
    return images.filter(image =>
        image.name.toLowerCase().includes(query.toLowerCase())
    );
}
