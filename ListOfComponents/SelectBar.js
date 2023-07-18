import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Header2 from './Header2';
import Music from './Music';

function SelectBar(){
    const items = [
        {id: 1, path: 'https://www.behindwoods.com/tamil-movies/slideshow/best-tamil-songs-released-in-february-2020/images/nira-from-takkar.jpg', category: 'Music', title: 'Nira Nira', views: 345, author: 'Siddharth'},
        {id: 2, path: 'https://www.videosforstatus.com/wp-content/uploads/2022/11/4K-Full-Screen-Poo-Nee-Po-Song-Whatsapp-Status-Video.jpg', category: 'Music', title: 'Poo Nee Poo', views: 2000, author: 'Aniruth'},
        {id: 3, path: 'https://www.japantimes.co.jp/wp-content/uploads/2020/05/np_file_13590.jpeg', category: 'Cartoon', title: 'Doraemon', views: 4004, author: 'Fujiko'},
        {id: 4, path: 'https://wallpapers.com/images/hd/shin-chan-amazed-3ifhnlv2ww6kuwb9.jpg', category: 'Cartoon', title: 'ShinChan', views: 5478, author: 'Yoshito Usui'},
        {id: 5, path: 'https://cdns-images.dzcdn.net/images/cover/85e1c8d3a8ecfe9fe746bc27e450aaab/500x500.jpg', category: 'Music', title: 'Dancing With Your Ghost', views: 67800, author: 'Sasha Alex Sloan'},
        {id: 6, path: 'https://www.loginradius.com/blog/static/00a89fc56461ea1529439d89072c93f1/701ee/react.jpg', category: 'Coding', title: 'React', views: 9045, author: 'Codevolution'},
        {id: 7, path: 'https://c.saavncdn.com/552/Unstoppable-English-2016-500x500.jpg', category: 'Music', title: 'Unstoppable', views: 88045, author: 'Sia'}
      ];

    const [ all, setAll ] = useState(false);
    const [ music, setMusic ] = useState(false);
    const [ cartoon, setCartoon ] = useState(false);
    const [ coding, setCoding ] = useState(false);


    const allHandler = () => {
        setMusic(false);
        setCartoon(false);
        setCoding(false);
        setAll(true);
    }
    
    const musicHandler = () => {
        setAll(false);
        setCartoon(false);
        setCoding(false);
        setMusic(true);
    }  

    const cartoonHandler = () => {
        setAll(false);
        setCartoon(false);
        setMusic(false);
        setCartoon(true);
    }  

    const codingHandler = () => {
        setAll(false);
        setCartoon(false);
        setMusic(false);
        setCoding(true);
    }  

    return(
        <div>
            <Button onClick={allHandler} variant='contained'>All</Button>{ ' '} 
            <Button onClick={musicHandler} variant='contained'>Music</Button>{ ' '}
            <Button onClick={cartoonHandler} variant='contained'>Cartoon</Button>{' '}
            <Button onClick={codingHandler} variant='contained'>Coding</Button>
            {all && <Header2 items={items}/>}
            {music && <Music items={items} filter='Music'/>}
            {cartoon && <Music items={items} filter='Cartoon'/>}
            {coding && <Music items={items} filter='Coding'/>}
        </div>
    );
}

export default SelectBar;