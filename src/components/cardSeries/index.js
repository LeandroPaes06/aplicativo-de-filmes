import React from 'react';
import {Image,Text,TouchableOpacity} from 'react-native'
import styles from './styles'

export default function CardSeries({titulo,imagem,nota}){

    return(

        <TouchableOpacity style = {styles.containerJogos}>

        <Image style = {styles.images} source ={require (`../../img-series/${imagem}` ) }/>
        <Text style = {styles.textNota}> {titulo}</Text>
        <Text style = {styles.textNota}> 8.9</Text>



        </TouchableOpacity>

    )



}