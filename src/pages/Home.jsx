import React from 'react'
import SecAcreditaciones from '../components/SecAcreditaciones'
import SecContactanos from '../components/SecContactanos'
import SecEnfoque from '../components/SecEnfoque'
import SecExperiencia from '../components/SecExperiencia'
import SectionServicios from '../components/SectionServicios'
import SimpleSlider from '../components/SliderBanner'
import SliderLogo from '../components/SliderLogo'

const Home = () => {
    return (
        <div>
            <SimpleSlider/>
            <SectionServicios/>
            <SecAcreditaciones/>
            <SecEnfoque/>
            <SecExperiencia />
            <SliderLogo/>
            <SecContactanos/>
        </div>
    )
}

export default Home