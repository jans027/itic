import React from 'react'
import SecAcreditaciones from '../components/SecAcreditaciones'
import SectionServicios from '../components/SectionServicios'
import SimpleSlider from '../components/SliderBanner'
import SecExperiencias from '../components/SliderExperiencia'

const Home = () => {
    return (
        <div>
            <SimpleSlider/>
            <SectionServicios/>
            <SecAcreditaciones/>
            <SecExperiencias/>
        </div>
    )
}

export default Home