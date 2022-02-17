/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
import "animate.css";
import { useCallback, useEffect, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import { TailSpin } from "react-loader-spinner";
import Gallery from "react-photo-gallery";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { FullBlack, Spacer } from "../../pages/Gallery/styles";
import { supabase } from "../../supabase";
import { images } from "./images";

export function ResposiveGallery() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [apiImages, setApiImages] = useState([]);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

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

            <Gallery
                photos={apiImages}
                onClick={openLightbox}
                // direction="column"
                // columns={5}
            />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={apiImages.map((x) => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title,
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
}
