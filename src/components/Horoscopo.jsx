import React from 'react';
import { useState } from 'react';
import Signo from './Signo';
import logo from '../assets/zodiaco.png';

const Horoscopo = () => {
    
    const imagenes = {
        aries : "https://cdn-icons-png.flaticon.com/512/1914/1914028.png",
        tauro : "https://cdn-icons-png.flaticon.com/512/1914/1914036.png",
        geminis : "https://cdn-icons-png.flaticon.com/512/1914/1914042.png",
        cancer : "https://cdn-icons-png.flaticon.com/512/1914/1914072.png",
        leo : "https://cdn-icons-png.flaticon.com/512/1914/1914080.png",
        virgo : "https://cdn-icons-png.flaticon.com/512/1914/1914093.png",
        libra : "https://cdn-icons-png.flaticon.com/512/1914/1914115.png",
        escorpio : "https://cdn-icons-png.flaticon.com/512/1914/1914119.png",
        sagitario : "https://cdn-icons-png.flaticon.com/512/1914/1914123.png",
        capricornio : "https://cdn-icons-png.flaticon.com/512/1914/1914135.png",
        acuario : "https://cdn-icons-png.flaticon.com/512/1914/1914139.png",
        piscis : "https://cdn-icons-png.flaticon.com/512/1914/1914143.png"
    }

    const [signoZodiacal, setsignoZodiacal] = useState("Signo");
    const [image, setImage] = useState(logo);
    const [dias, setDias] = useState("X - X");
    const [texto, setTexto] = useState("");

    const getCurrentDate = () => {
        let date = new Date();
        let month = date.getMonth() + 1;

        if (month < 10) {
            let aux = month;
            month = `0${aux}`;
        }

        return `${date.getFullYear()}-${month}-${date.getDate()}`;
    };

    const getHoroscopo = (e) => {
        let date = e.target.value;
        setsignoZodiacal(getZodiacSign(date));
    };


    const getZodiacSign = (date) => {
        
        //let anio = date.slice(0,4);
        let mes = parseInt(date.slice(5,7));
        let dia = parseInt(date.slice(8));
        let signo = "";

        switch (mes) {
            case 1: // Enero
                if(dia > 20){
                    signo = "Acuario";
                    setImage(imagenes.acuario);
                    setDias("21 de enero - 20 de febrero");
                    textoSigno(11);
                }
                else{
                    signo = "Capricornio";
                    setImage(imagenes.capricornio);
                    setDias("21 de diciembre - 20 de enero");
                    textoSigno(10);
                }
                break;
            case 2: // Febrero
                if(dia > 20){
                    signo = "Piscis";
                    setImage(imagenes.piscis);
                    setDias("21 de febrero - 20 de marzo");
                    textoSigno(12);
                }
                else{
                    signo = "Acuario";
                    setImage(imagenes.acuario);
                    setDias("21 de enero - 20 de febrero");
                    textoSigno(11);
                }
                break;
            case 3: // Marzo
                if(dia > 20){
                    signo = "Aries";
                    setImage(imagenes.aries);
                    setDias("21 de marzo - 20 de abril");
                    textoSigno(1);
                }
                else{
                    signo = "Piscis";
                    setImage(imagenes.piscis);
                    setDias("21 de febrero - 20 de marzo");
                    textoSigno(12);
                }
                break;
            case 4: // Abril
                if(dia > 20){
                    signo = "Tauro";
                    setImage(imagenes.tauro);
                    setDias("21 de abril - 20 de mayo");
                    textoSigno(2);
                }
                else{
                    signo = "Aries";
                    setImage(imagenes.aries);
                    setDias("21 de marzo - 20 de abril");
                    textoSigno(1);
                }
                break;
            case 5: // Mayo
                if(dia > 20){
                    signo = "Geminis";
                    setImage(imagenes.geminis);
                    setDias("21 de mayo - 20 de junio");
                    textoSigno(3);
                }
                else{
                    signo = "Tauro";
                    setImage(imagenes.tauro);
                    setDias("21 de abril - 20 de mayo");
                    textoSigno(2);
                }
                break;
            case 6: // Junio
                if(dia > 20){
                    signo = "Cancer";
                    setImage(imagenes.cancer);
                    setDias("21 de junio - 20 de julio");
                    textoSigno(4);
                }
                else{
                    signo = "Geminis";
                    setImage(imagenes.geminis);
                    setDias("21 de mayo - 20 de junio");
                    textoSigno(3);
                }
                break;
            case 7: // Julio
                if(dia > 20){
                    signo = "Leo";
                    setImage(imagenes.leo);
                    setDias("21 de julio - 20 de agosto");
                    textoSigno(5);
                }
                else{
                    signo = "Cancer";
                    setImage(imagenes.cancer);
                    setDias("21 de junio - 20 de julio");
                    textoSigno(4);
                }
                break;
            case 8: // Agosto
                if(dia > 20){
                    signo = "Virgo";
                    setImage(imagenes.virgo);
                    setDias("21 de agosto - 20 de septiembre");
                    textoSigno(6);
                }
                else{
                    signo = "Leo";
                    setImage(imagenes.leo);
                    setDias("21 de julio - 20 de agosto");
                    textoSigno(5);
                }
                break;
            case 9: // Septiembre
                if(dia > 20){
                    signo = "Libra";
                    setImage(imagenes.libra);
                    setDias("21 de septiembre - 20 de octubre");
                    textoSigno(7);
                }
                else{
                    signo = "Virgo";
                    setImage(imagenes.virgo);
                    setDias("21 de agosto - 20 de septiembre");
                    textoSigno(6);
                }
                break;
            case 10: // Octubre
                if(dia > 20){
                    signo = "Escorpio";
                    setImage(imagenes.escorpio);
                    setDias("21 de octubre - 20 de noviembre");
                    textoSigno(8);
                }
                else{
                    signo = "Libra";
                    setImage(imagenes.libra);
                    setDias("21 de septiembre - 20 de octubre");
                    textoSigno(7);
                }
                break;
            case 11: // Noviembre
                if(dia > 20){
                    signo = "Sagitario";
                    setImage(imagenes.sagitario);
                    setDias("21 de noviembre - 20 de diciembre");
                    textoSigno(9);
                }
                else{
                    signo = "Escorpio";
                    setImage(imagenes.escorpio);
                    setDias("21 de octubre - 20 de noviembre");
                    textoSigno(8);
                }
                break;
            case 12: // Diciembre
                if(dia > 20){
                    signo = "Capricornio";
                    setImage(imagenes.capricornio);
                    setDias("21 de diciembre - 20 de enero");
                    textoSigno(10);
                }
                else{
                    signo = "Sagitario";
                    setImage(imagenes.sagitario);
                    setDias("21 de noviembre - 20 de diciembre");
                    textoSigno(9);
                }
                break;
        
            default:
                signo = "Signo";
                setImage(logo);
                setDias("Error");
                break;
        }

        return signo;
        
    };

    const textoSigno = (opcion) => {
        switch (opcion) {
            case 1:// Aries
                setTexto(
                    "Las personas del signo del zodiaco Aries suelen ser, seg??n la astrolog??a occidental, entusiastas, en??rgicos, valientes, pioneras, independientes, inquietas, con un car??cter dispuesto a liderar e incluso, a veces pueden resultar algo tercas e incluso agresivas.\n\nAlgunos famosos Aries: Miguel ??ngel Silvestre, Lola ??ndigo, Sarah Jessica Parker, Elton John, Mariano Rajoy y James Franco."
                );
                break;
            case 2 :// Tauro
                setTexto(
                    "Las personas cuyo signo del zodiaco es Tauro suelen ser definidas por la astronom??a occidental como pacientes, perseverantes, con una gran fuerza de voluntad, cari??osas, pr??cticas, respetuosas, amantes del tiempo para s?? mismas y de gran coraz??n. Sin embargo, al igual que el toro que las simboliza, pueden llegar a tener muy mal humor al enfadarse y ser muy rencorosas.\n\nAlgunos de los Tauro m??s famosos: Gigi Hadid, Charli D'Amelio, Megan Fox, Jon Kortajarena, Hugo Silva, Miguel Herr??n, Jessica Alba, Sam Smith, Travis Scott, Lizzo, Ren??e Zellweger y Janet Jackson, entre muchos otros. "
                );
                break;
            case 3: //Geminis
                setTexto(
                    "Las personas G??minis son definidas por la astrolog??a como ingeniosas, inteligentes, generosas, independientes, creativas, vitales, con mucha capacidad de resiliencia, con ganas de aprender y sobre todo, abiertas a las nuevas experiencias. Pero como no todo puede ser bueno, y debido a las dos caras de su signo, pueden sufrir cambios de humor adem??s de caer f??cilmente en continuas contradicciones."
                );
                break;
            case 4://Cancer
                setTexto(
                    "Tradicionalmente, la astrolog??a occidental atribuye al signo del zodiaco C??ncer caracter??sticas como la lealtad, la simpat??a, la sensualidad, la intuici??n, la creatividad, la cautela, la necesidad de proteger a sus familiares y amigos y la sensibilidad. Pero tambi??n, las personas de este signo pueden ser celosas, inseguras, desconfiadas, muy golosas e incluso introvertidas."
                );
                break;
            case 5: // Leo
                setTexto(
                    "Las personas nacidas en Leo suelen tener, seg??n la astrolog??a, un car??cter fiel, bondadoso, optimista, generoso y extrovertido. Son ambiciosos, valientes, independientes y seguros de s?? mismos. Por otro lado, como punto negativo, los Leo son idealistas, inteligentes, tercos, un poco arrogantes, orgullosos y pueden tener mal humor.\n\nAlgunos famosos que tienen el hor??scopo Leo: Jennifer L??pez, Eva Amaral, Isabel Pantoja, M???adonna, ??rsula Corber??, Matt LeBlanc y Fernando Alonso."
                );
                break;
            case 6: // Virgo
                setTexto(
                    "Los Virgo, seg??n la astronom??a occidental, son serios, cautos, disciplinados, meticulosas, anal??ticas, modestas, t??midas, trabajadoras y tienen un gran sentido de la responsabilidad y de la amistad."
                );
                break;
            case 7: // Libra
                setTexto(
                    "Los Libra suelen definirse como idealistas, sociales y diplom??ticos. Son personas calmadas, afables, equilibradas y que intentan mantenerse neutrales cuando se presentan conflictos. Sin embargo, los Libra, tambi??n odian que se les contradiga, aunque en ocasiones no son capaces de enfrentarse a los dem??s."
                );
                break;
            case 8: // Escorpio
                setTexto(
                    "Los Escorpio se definen, seg??n el zodiaco occidental, como personas con una gran cortes??a, observadoras, buenas consejeras y con mucha fuerza de voluntad y capacidad para razonar. Pero tambi??n son envidiosas, posesivas, impulsivas y desconfiadas.\n\nAlgunos famosos Escorpio: Ana Mil??n, Rosario Flores Bel??n Esteban, Rita Ora, Winona Ryder, Leonardo DiCaprio y Meg Ryan. "
                );
                break;
                case 9: // Sagitario
                setTexto(
                    "Las personas nacidas en Sagitario suelen ser simp??ticas, sinceras, honestas, optimistas y un tanto intelectuales. Este signo se caracteriza por la empat??a, la comprensi??n y la necesidad de vivir aventuas y sentirse libre. Sin embargo, los Sagitario tambi??n pueden ser impacientes.\n\nAlgunos famosos Sagitario: Miley Cyrus, Brad Pitt, Taylor Swift, Alejandro Sanz, Antonio Orozco, Britney Spears y Christina Aguilera. "
                );
                break;
            case 10: // Capricornio
                setTexto(
                    "Todas aquellas personas nacidas en la ??poca navide??a son Capricornio. Este signo es muy estable, por lo que sus caracter??sticas son el trabajo duro, la fiabilidad, la prudencia, la practicidad, la ambici??n y la justicia. En el lado malo, la melancol??a y el pesimismo pueden ser sus dos grandes enemigos para alcanzar la felicidad."
                );
                break;
            case 11: // Acuario
                setTexto(
                    "La personalidad de los Acuario, seg??n la astrolog??a occidental, suele ser muy abierta. Son simp??ticos, divertidos, originales, idealistas, l??gicos, con sentido del humor, so??adores, imaginativos, honestos, leales, tolerantes y sin prejuicios."
                );
                break;
            case 12: // Piscis
                setTexto(
                    "Por ??ltimo, al signo Piscis se le atribuyen caracter??sticas como la creatividad, imaginaci??n, la sensibilidad, la amabilidad, la intuici??n, la empat??a, la paciencia y la facilidad para so??ar. Adem??s, los Piscis suelen ser personas tranquilas que evitan meterse en problemas e incluso les llega a costar rebelarse ante algunas injusticias."
                );
                break;
        
            default:
                break;
        }
    }

    return (

        <div className='container-fluid'>
        <h1 className='display-1 text-center '>Horoscopo React</h1>
        <hr />

        <div className='container'>
            <form action="" id='horoscopo-form' >
                <div className='form-floating'>
                <input type="date" id='fechaNac' onChange={e => getHoroscopo(e)} className='form-control' min="1900-01-01" step="1" max={getCurrentDate()}/>
                <label htmlFor="fechaNac">Fecha de nacimiento</label>
                </div>
            </form>
        </div>
        <Signo img={image} sign={signoZodiacal} dates={dias} text={texto} />
        </div>
    )
}

export default Horoscopo;