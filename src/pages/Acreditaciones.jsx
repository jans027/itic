import React from 'react'
import { Link } from 'react-router-dom'
import BannerEmpresa from '../components/BannerEmpresa'
import ContacBar from '../components/ContacBar'
import NavEmpresa from '../components/NavEmpresa'
import { data } from '../data/data'
import { CardAcredt, ContCardsAcred, ConTitleAcred, TitleAcred } from '../styles/Acreditaciones'
import { ContPagesEmpresa } from '../styles/NavEmpresa'
import { ConNosotros, MenuMobileNos, MobileTitle } from '../styles/Nosotros'
import { SubTitleSection } from '../styles/SecAcreditaciones'
import AddCircleIcon from '@mui/icons-material/AddCircle';
// Icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';




const Contact = () => {

    // get data
    const [datos] = data;
    const { empresa: { dropDownMenu: { acreditaciones: { name, documentOnac: { title, subTitle, cards } } } } } = datos;
    const card = Object.values(cards);
    // console.log(name)

    // search word 
    const boldtWord = "iticcol";
    const parts = subTitle.split(boldtWord);

    //.......................................................
    // extract values of dropDownMenu
    const items = Object.values(datos.empresa.dropDownMenu);
    // go through the array and divide it in two
    const indice = items.findIndex((item) => item.name === name)

    const itemsFind0 = items.slice(0, indice)
    const itemsUrlUp = Object.values(itemsFind0)
    // console.log(itemsUrlUp)

    const itemsFind1 = items.slice(indice + 1)
    const itemsUrlDown = Object.values(itemsFind1)
    // console.log(itemsUrl)
    //.......................................................



    return (
        <>
            <BannerEmpresa />
            <ContPagesEmpresa>
                <div className='ContSectionEm'>
                    <NavEmpresa />
                    <ConNosotros>

                        <MenuMobileNos>
                            {
                                itemsUrlUp.map((item) =>
                                    <Link to={item.url} key={item.name}><div>{item.name}<ArrowDropDownIcon /></div></Link>
                                )
                            }
                        </MenuMobileNos>

                        <MobileTitle>
                            <p>{name.split('\n').map((line, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                )
                            })}</p><ArrowDropDownIcon />
                        </MobileTitle>

                        <ConTitleAcred>
                            <TitleAcred>{title}</TitleAcred>
                            <SubTitleSection>
                                {parts[0]}
                                <span style={{ fontWeight: 'bold' }}>{boldtWord}</span>
                                {parts[1]}
                            </SubTitleSection>
                        </ConTitleAcred>
                        <ContCardsAcred>
                            {
                                card.map((item) =>
                                    <CardAcredt key={item.id}>
                                        <span>
                                            <p>{item.textP.split('\n').map((line, i) => {
                                                return (
                                                    <React.Fragment key={i}>
                                                        {line}
                                                        <br />
                                                    </React.Fragment>
                                                )
                                            })}</p>
                                        </span>

                                        <span>
                                            <img src={require(`../images/${item.img}`)} alt={item.name} />
                                        </span>

                                        <Link to={item.url} target='_blank' >
                                            {item.name.split('\n').map((line, i) => {
                                                return (
                                                    <React.Fragment key={i}>
                                                        {line}
                                                        <br />
                                                    </React.Fragment>
                                                )
                                            })}
                                            <AddCircleIcon />
                                        </Link>
                                    </CardAcredt>
                                )
                            }
                        </ContCardsAcred>

                        <MenuMobileNos>
                            {
                                itemsUrlDown.map((item) =>
                                    <Link to={item.url} key={item.name}><div>
                                        <p>{item.name.split('\n').map((line, i) => {
                                            return (
                                                <React.Fragment key={i}>
                                                    {line}
                                                    <br />
                                                </React.Fragment>
                                            )
                                        })}</p>
                                        <ArrowDropDownIcon /></div></Link>
                                )
                            }
                        </MenuMobileNos>

                    </ConNosotros>
                </div>
                <ContacBar />
            </ContPagesEmpresa>
        </>
    )
}

export default Contact