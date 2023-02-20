import React from 'react'
import SecAcreditaciones from '../components/SecAcreditaciones'
import SecContactanos from '../components/SecContactanos'
import SecEnfoque from '../components/SecEnfoque'
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
            <SecEnfoque/>
            <SecExperiencias/>
            <SliderLogo/>
            <SecContactanos/>
        </div>
    )
}

export default Home