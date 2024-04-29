"use client"
import style from "./style.module.scss";
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from '@/service/PhotoService';

interface ImageData {
    itemImageSrc: string;
    thumbnailImageSrc: string;
    alt: string;
    title: string;
}

export default function ClickEventDemo() {
    const [images, setImages] = useState<ImageData[]>([]);

    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item: ImageData) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    return (
        <div className={style.card}>
            {images && <Galleria value={images}  showThumbnails={false} showIndicators circular autoPlay transitionInterval={2000} 
                    showIndicatorsOnItem={true} showItemNavigators item={itemTemplate} />}
        </div>
    )
}

        

        