"use client";
import style from "./style.module.scss";
import React, { useState, useEffect } from "react";
import { Galleria } from "primereact/galleria";
import { PhotoService } from "@/service/PhotoService";
import { Image as ImagePrice } from "primereact/image";

interface ImageData {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
  title: string;
}

export default function BannerHero() {
  const [images, setImages] = useState<ImageData[]>([]);

  const itemTemplate = (item: ImageData) => {
    return (
      <ImagePrice
        src={item.itemImageSrc}
        alt={item.alt}
        style={{
          width: "100%",
          display: "block",
          maxHeight: "500px",
          height: "500px",
          objectFit: "contain",
          overflow: "hidden"
        }}
      />
    );
  };

  useEffect(() => {
    PhotoService.getImages().then((data) => {
      setImages(data);
    });
  }, []);

  return (
    <div className={style.card}>
      {images && (
        <Galleria
          value={images}
          showThumbnails={false}
          showIndicators
          circular
          autoPlay
          transitionInterval={4000}
          showIndicatorsOnItem={true}
          showItemNavigators
          item={itemTemplate}
        />
      )}
    </div>
  );
}
