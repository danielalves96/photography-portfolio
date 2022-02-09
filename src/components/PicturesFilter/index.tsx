import "animate.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Container, Buttons, Category, CategorySelect } from "./styles";

export function PicturesFilter() {
    const { t, i18n } = useTranslation();
    const [category, setCategory] = useState(
        t(`picturesFilter.HIGHLIGHTS`) as string
    );

    const categories = [
        t(`picturesFilter.HIGHLIGHTS`),
        t(`picturesFilter.THEATER`),
        t(`picturesFilter.STUDIO`),
        t(`picturesFilter.FINE_ART`),
        t(`picturesFilter.EXTERNAL`),
        t(`picturesFilter.MARRIAGES`),
        t(`picturesFilter.PRE_WEDDINGS`),
        t(`picturesFilter.BIRTHDATE_15`),
        t(`picturesFilter.BIRTHDAYS`),
        t(`picturesFilter.GASTRONOMY`),
        t(`picturesFilter.COMMERCIAL`),
        t(`picturesFilter.EVENTS`),
    ];

    useEffect(() => {
        setCategory(t(`picturesFilter.HIGHLIGHTS`));
    }, [i18n.language]);

    return (
        <div className="animate__animated animate__fadeIn animate__slow ">
            <Container>
                <Buttons>
                    {categories.map((category) => (
                        <button
                            type="button"
                            className="button is-light"
                            onClick={() => setCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </Buttons>
            </Container>
            <Category>
                <span>{category.toLocaleUpperCase()}</span>
            </Category>

            <CategorySelect>
                <span>{t(`picturesFilter.CATEGORY`)}</span>
                <div className="select is-rounded is-primary">
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories.map((category) => (
                            <option value={category}>{category}</option>
                        ))}
                    </select>
                </div>
            </CategorySelect>
        </div>
    );
}
