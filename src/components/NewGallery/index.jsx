/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
import "animate.css";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ResponsiveGallery from "react-responsive-gallery";

import { FullBlack, Spacer } from "../../pages/Gallery/styles";
import { supabase } from "../../supabase";

export function NewGallery() {
    const [loading, setLoading] = useState(false);
    const [apiImages, setApiImages] = useState([]);

    async function getPictures() {
        const { data, error } = await supabase
            .from(`pictures`)
            .select()
            .order(`id`, { ascending: false });

        if (data) {
            setApiImages(data.sort(() => Math.random() - 0.5));
            setLoading(true);
        }
    }

    useEffect(() => {
        getPictures();
    }, []);

    return (
        <div className="animate__animated animate__fadeIn animate__slow">
            <Spacer />
            {!loading && (
                <FullBlack>
                    <div className="full-screen-loader">
                        <TailSpin
                            height="100"
                            width="100"
                            color="white"
                            ariaLabel="loading"
                        />
                    </div>
                </FullBlack>
            )}
            <ResponsiveGallery
                images={apiImages}
                useLightBox
                key={apiImages.id}
                imagesStyle={{ cursor: `pointer` }}
                numOfImagesPerRow={{ xs: 1, s: 2, m: 3, l: 3, xl: 5, xxl: 6 }}
            />
        </div>
    );
}
