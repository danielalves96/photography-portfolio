/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
import "animate.css";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ResponsiveGallery from "react-responsive-gallery";
import { useLocation } from "react-router-dom";

import { FullBlack, Spacer } from "../../pages/Gallery/styles";
import { usePhotos } from "../../providers/photos.jsx";

export function NewGallery() {
    const { photos, loading } = usePhotos();

    const [displayedImages, setDisplayedImages] = useState([]);

    const { search } = useLocation();

    useEffect(() => {
        setDisplayedImages(photos);
    }, [photos]);

    useEffect(() => {
        if (!search) {
            setDisplayedImages(photos);
        }

        if (search === `?fine_art`) {
            setDisplayedImages(
                photos.filter((phot) => phot.category === `Fine art`)
            );
        }

        if (search === `?external`) {
            setDisplayedImages(
                photos.filter((phot) => phot.category === `Ensaios externos`)
            );
        }

        if (search === `?studio`) {
            setDisplayedImages(
                photos.filter((phot) => phot.category === `Estúdio`)
            );
        }

        if (search === `?marriage`) {
            setDisplayedImages(
                photos.filter((phot) => phot.category === `Casamentos`)
            );
        }

        if (search === `?pre_wedding`) {
            setDisplayedImages(
                photos.filter((phot) => phot.category === `Pré casamento`)
            );
        }

        if (search === `?theater`) {
            setDisplayedImages(
                photos.filter((phot) => phot.category === `Teatro`)
            );
        }

        if (search === `?15yo`) {
            setDisplayedImages(
                photos.filter((phot) => phot.category === `15 Anos`)
            );
        }

        if (search === `?gastronomy`) {
            setDisplayedImages(
                photos.filter((phot) => phot.category === `Gastronomia`)
            );
        }

        if (search === `?children`) {
            setDisplayedImages(
                photos.filter((phot) => phot.category === `Infantil`)
            );
        }

        if (search === `?commertial`) {
            setDisplayedImages(
                photos.filter((phot) => phot.category === `Comercial`)
            );
        }
    }, [search]);

    return (
        <div
            className="animate__animated animate__fadeIn animate__slow"
            style={{ minHeight: `95vh` }}
        >
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
                images={displayedImages}
                useLightBox
                key={displayedImages.id}
                imagesStyle={{ cursor: `pointer` }}
                numOfImagesPerRow={{ xs: 1, s: 2, m: 3, l: 3, xl: 5, xxl: 6 }}
            />
        </div>
    );
}
