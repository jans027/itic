import React from 'react'
import SecAcreditaciones from '../components/SecAcreditaciones'
import SectionServicios from '../components/SectionServicios'
import SimpleSlider from '../components/SliderBanner'

const Home = () => {
    return (
        <div>
            <SimpleSlider/>
            <SectionServicios/>
            <SecAcreditaciones/>
        </div>
    )
}

export default Home