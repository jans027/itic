import React from 'react'
import SecAcreditaciones from '../components/SecAcreditaciones'
import SectionServicios from '../components/SectionServicios'
import SimpleSlider from '../components/SliderBanner'
import SecExperiencias from '../components/SliderExperiencia'
import SliderLogo from '../components/SliderLogo'

const Home = () => {
    return (
        <div>
            <SimpleSlider/>
            <SectionServicios/>
            <SecAcreditaciones/>
            <SecExperiencias/>
            <SliderLogo/>
        </div>
    )
}

export default Home