export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: 'https://luxodebiblia.com.br/wp-content/uploads/2024/01/banner.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'http://karrada.com/wp-content/uploads/2014/11/whattheysay1-1400x500-dark.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2s.jpg',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: 'https://unreasonablegroup.com/articles/wp-content/uploads/2016/11/Featured-Image-1400x500.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria3s.jpg',
                alt: 'Description for Image 3',
                title: 'Title 3'
            },
            {
                itemImageSrc: 'https://suziegruber.com/wp-content/uploads/2017/07/butterflyFinal-1400x500.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria4s.jpg',
                alt: 'Description for Image 4',
                title: 'Title 4'
            },
            {
                itemImageSrc: 'https://fsmag-ecs.paceinteractive.com/magazine/wp-content/uploads/2021/11/HKG_1583_1400x500.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria5s.jpg',
                alt: 'Description for Image 5',
                title: 'Title 5'
            },
            {
                itemImageSrc: 'https://studiopeixe.com.br/vk_novo/wp-content/uploads/2023/08/main-img-video-vila-kalango.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria6s.jpg',
                alt: 'Description for Image 6',
                title: 'Title 6'
            },
            {
                itemImageSrc: 'https://fsmag-ecs.paceinteractive.com/magazine/wp-content/uploads/2020/11/hero_NYD_495_1400x500-1400x500.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria7s.jpg',
                alt: 'Description for Image 7',
                title: 'Title 7'
            },
            {
                itemImageSrc: 'https://anjabasaric.com/wp-content/uploads/2018/10/Display-Image-Sizes-Cheat-SheetBlog-Header-Banner-1400x500-1024x366.png',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria8s.jpg',
                alt: 'Description for Image 8',
                title: 'Title 8'
            },
            {
                itemImageSrc: 'https://www.careinnovations.org/wp-content/uploads/site-visit-on-the-road-header-1400x500-1120x400.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria9s.jpg',
                alt: 'Description for Image 9',
                title: 'Title 9'
            },
            {
                itemImageSrc: 'https://skedit.io/wp-content/uploads/2018/01/BG_Doodle-1400x500.png',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria10s.jpg',
                alt: 'Description for Image 10',
                title: 'Title 10'
            },
            {
                itemImageSrc: 'https://skfoodbanks.ca/app/themes/foodbanks-sk/library/images/hero-page.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria11s.jpg',
                alt: 'Description for Image 11',
                title: 'Title 11'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria12.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria12s.jpg',
                alt: 'Description for Image 12',
                title: 'Title 12'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria13.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria13s.jpg',
                alt: 'Description for Image 13',
                title: 'Title 13'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria14.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria14s.jpg',
                alt: 'Description for Image 14',
                title: 'Title 14'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria15.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria15s.jpg',
                alt: 'Description for Image 15',
                title: 'Title 15'
            }
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};

