import { createContext, useContext, useEffect, useState } from "react";

import { images } from "../components/ResponsiveGallery/images";
import { supabase } from "../supabase";

export const PhotosContext = createContext({});

// eslint-disable-next-line react/prop-types
export function PhotosProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState([]);

    async function getPictures() {
        const { data, error } = await supabase
            .from(`pictures`)
            .select()
            .order(`id`, { ascending: false });

        if (data) {
            setPhotos(data.sort(() => Math.random() - 0.5));
            setLoading(true);
        }
    }

    useEffect(() => {
        getPictures();
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <PhotosContext.Provider value={{ photos, loading }}>
            {children}
        </PhotosContext.Provider>
    );
}

export const usePhotos = () => useContext(PhotosContext);
