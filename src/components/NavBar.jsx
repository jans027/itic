import * as React from "react";
import { Link } from "react-router-dom";
import { data } from "../data/data";
import {
    BtnBase,
    LogoNav,
    MenuDrop,
    StyledNav,
} from "../styles/NavBar";
// Menu
import MenuItem from '@mui/material/MenuItem';
// icons
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// images
import Logo from '../images/Logo-itic.svg';
import ImgCol from '../images/Bandera-col.png';
// import ImgPer from '../images/Bandera-per.png';





const NavBar = () => {
    // get data
    const [datos] = data;
    // destructuring data
    const { 
        inicio, 
        servicios, 
        empresa, 
        consulta, 
        cotizacion, 
        contacto,
        countries
        } = datos;
    const serviciosSub = Object.values(servicios.dropDownMenu);
    const empresasSub = Object.values(empresa.dropDownMenu);
    const countriesSub = Object.values(countries);
    // const inicioSub = Object.values(inicio);
    // console.log(countriesSub)

    // menu 1
    const [menu1, setMenu1] = React.useState(null);
    const open1 = Boolean(menu1);

    const handleClick1 = (event) => {
        setMenu1(event.currentTarget);
        // console.log(event.target.outerText)
    };
    const handleClose1 = () => {
        setMenu1(null);
    };
    // menu 2
    const [menu2, setMenu2] = React.useState(null);
    const open2 = Boolean(menu2);

    const handleClick2 = (event) => {
        setMenu2(event.currentTarget);
        // console.log(event.target.outerText)
    };
    const handleClose2 = () => {
        setMenu2(null);
    };

    // menu 2
    const [menu3, setMenu3] = React.useState(null);
    const open3 = Boolean(menu3);

    const handleClick3 = (event) => {
        setMenu3(event.currentTarget);
        // console.log(event.target.outerText)
    };
    const handleClose3 = () => {
        setMenu3(null);
    };




    return (
        <StyledNav>
            <div className="Address">
                <span><PhoneAndroidOutlinedIcon /><h4>+57 601 746 0980</h4></span>
                <span><EmailOutlinedIcon /><h4>contacto@iticco.com</h4></span>
            </div>

            <div className="ContMenu">

                <LogoNav to={inicio.url}>
                    <img src={Logo} alt={inicio.id} />
                </LogoNav>

                <span>
                    <BtnBase
                        id="inicio"
                        className="inicio"
                    >
                        <Link to={inicio.url}>{inicio.name}</Link>
                    </BtnBase>

                    <ul>
                        <BtnBase
                            // id="basic-button"
                            aria-controls={open1 ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open1 ? 'true' : undefined}
                            onClick={(event) => handleClick1(event)}
                            name='servicios'
                        >
                            <Link>{servicios.name}<ArrowDropDownSharpIcon /></Link>
                        </BtnBase>
                        <MenuDrop
                            // id="basic-menu"
                            anchorEl={menu1}
                            open={open1}
                            onClose={handleClose1}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {
                                serviciosSub.map((item) =>
                                    <MenuItem key={item.id} onClick={handleClose1}>
                                        <Link to={item.url}>{item.name}</Link>
                                    </MenuItem>
                                )
                            }
                        </MenuDrop>
                    </ul>

                    <ul>
                        <BtnBase
                            // id="basic-button"
                            aria-controls={open2 ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open2 ? 'true' : undefined}
                            onClick={(event) => handleClick2(event)}
                            name='cotizacion'
                        >
                            <Link>{cotizacion.name}<ArrowDropDownSharpIcon /></Link>
                        </BtnBase>
                        <MenuDrop
                            // id="basic-menu"
                            anchorEl={menu2}
                            open={open2}
                            onClose={handleClose2}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {
                                empresasSub.map((item) =>
                                    <MenuItem key={item.id} onClick={handleClose2}>
                                        <Link to={item.url}>{item.name}</Link>
                                    </MenuItem>
                                )
                            }
                        </MenuDrop>
                    </ul>

                    <BtnBase
                        id="inicio"
                        className="inicio"
                    >
                        <Link>{consulta.name}</Link>
                    </BtnBase>

                    <BtnBase
                        id="inicio"
                        className="inicio"
                    >
                        <Link to={cotizacion.url}>{cotizacion.name}</Link>
                    </BtnBase>

                    <BtnBase
                        id="inicio"
                        className="inicio"
                    >
                        <Link to={contacto.url}>{contacto.name}</Link>
                    </BtnBase>

                    <ul>
                        <BtnBase
                            // id="basic-button"
                            aria-controls={open3 ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open3 ? 'true' : undefined}
                            onClick={(event) => handleClick3(event)}
                            name='servicios'
                        >
                            <img src={ImgCol} alt="" />
                            <Link>COL<ArrowDropDownSharpIcon /></Link>
                        </BtnBase>
                        <MenuDrop
                            // id="basic-menu"
                            anchorEl={menu3}
                            open={open3}
                            onClose={handleClose3}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {
                                countriesSub.map((item) =>
                                    <MenuItem key={item.id} onClick={handleClose3}>
                                        <Link to={item.url}>{item.name}</Link>
                                    </MenuItem>
                                )
                            }
                        </MenuDrop>
                    </ul>
                </span>

            </div>
        </StyledNav>
    );
};

export default NavBar;


