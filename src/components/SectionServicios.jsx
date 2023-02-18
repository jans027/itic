import React from 'react'
import { data } from '../data/data';
import { SubTitleSection, TitleSection } from '../styles/SecAcreditaciones';
import { CardServicios, ConSectionServicios, ContCardsServi, ContTextCard, EnlaceBtnS, EnlaceImg } from '../styles/SectionServicios';


const SectionServicios = () => {

    // get data
    const [datos] = data;
    // destructuring data
    const {
        servicios,
    } = datos;
    const serviciosSub = Object.values(servicios.dropDownMenu);
    // console.log(serviciosSub)



    return (
        <>
            <ConSectionServicios>
                <TitleSection>{servicios.name}</TitleSection>
                <SubTitleSection>{servicios.subTitle}</SubTitleSection>

                <ContCardsServi>
                    {
                        serviciosSub.map((item) =>
                            <CardServicios key={item.id}>
                                <div>
                                    <EnlaceImg to={item.url}>
                                            <img src={require(`../images/${item.cardImg}`)} alt={item.name} />
                                    </EnlaceImg>
                                    <ContTextCard>
                                        <h4>{item.name}</h4>
                                        <p>{item.cardText}</p>
                                    </ContTextCard>
                                </div>
                                <div>
                                    <EnlaceBtnS to={item.url}>VER MÁS</EnlaceBtnS>
                                </div>
                            </CardServicios>
                        )
                    }
                </ContCardsServi>

            </ConSectionServicios>
        </>
    )
}

export default SectionServicios;