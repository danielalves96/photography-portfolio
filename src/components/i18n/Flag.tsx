import React from "react";

// Componente bem simples que recebe uma imagem
// e se está selecionada ou não (apenas para efeitos visuais)

function Flag({ image, isSelected, ...props }: any) {
    return (
        <img
            alt="flag"
            src={image}
            className={isSelected ? `flag selected` : `flag`}
            /* eslint-disable react/jsx-props-no-spreading */
            {...props}
        />
    );
}

export default Flag;
